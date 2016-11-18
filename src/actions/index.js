import moment from 'moment'
import GoogleDrive from '../GoogleDrive.js'
import LocalStore from '../LocalStore.js'
import {ITEM_TYPE_RECENT, ITEM_TYPE_FAVORITE, ITEM_TYPE_SEARCH, SAVE_KEY_SEARCH_TEXT} from '../constants.js'

export const TYPE_NONE                = 'NONE'
export const TYPE_SHOW_ITEMS          = 'SHOW_ITEMS'
export const TYPE_SEARCH_ITEMS        = 'SEARCH_ITEMS'
export const TYPE_RESET_AUTH_TOKEN    = 'RESET_AUTH_TOKEN'

const MAX_LIST_COUNT = 20
const REQUEST_FIELDS = 'files(iconLink,id,kind,mimeType,name,viewedByMeTime,webContentLink,webViewLink),nextPageToken'
const SAVE_KEY_RESULT_MAP = {}
SAVE_KEY_RESULT_MAP[ITEM_TYPE_RECENT]   = 'recentResult'
SAVE_KEY_RESULT_MAP[ITEM_TYPE_FAVORITE] = 'favoriteResult'
SAVE_KEY_RESULT_MAP[ITEM_TYPE_SEARCH]   = 'searchResult'

const showItems = (itemType, items) => {
  return {
    type: TYPE_SHOW_ITEMS,
    itemType,
    items
  }
}

const loadLocalItems = (itemType) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      LocalStore.load(SAVE_KEY_RESULT_MAP[itemType], (items) => {
        resolve(items[SAVE_KEY_RESULT_MAP[itemType]] || [])
      })
    }).then( (items) => {
      dispatch(showItems(itemType, items))
    })
  }
}

export const searchItems = (text) => {
  return {
    type: TYPE_SEARCH_ITEMS,
    text
  }
}

export const resetAuthToken = () => {
  GoogleDrive.resetAuth(false)
  return {
    type: TYPE_RESET_AUTH_TOKEN
  }
}

export const requestItems = (itemType) => {
  return (dispatch) => {
    dispatch(loadLocalItems(itemType))
    if (itemType === ITEM_TYPE_SEARCH) {
      // Don't request items when search tab pressed.
      return
    }
    return new Promise((resolve, reject) => {
      let reqParams = {}
      switch (itemType) {
        case ITEM_TYPE_RECENT:
          reqParams = {'fields': REQUEST_FIELDS, 'q': 'trashed = false and viewedByMeTime >= \'' + moment().subtract(6, 'months').toISOString() + '\'', 'orderBy': 'viewedByMeTime desc'}
          break
        case ITEM_TYPE_FAVORITE:
          reqParams = {'fields': REQUEST_FIELDS, 'q': 'trashed = false and starred = true', 'orderBy': 'viewedByMeTime desc'}
          break
      }
      GoogleDrive.listLimitedFiles(reqParams, MAX_LIST_COUNT, (items, nextPageToken) => {
        resolve(items || [], nextPageToken)
      })
    }).then( (items, nextPageToken) => {
      LocalStore.save(SAVE_KEY_RESULT_MAP[itemType], items)
      dispatch(showItems(itemType, items))
    })
  }
}

export const requestSearchItems = (searchText) => {
  return (dispatch) => {
    dispatch(searchItems(searchText))
    return new Promise((resolve, reject) => {
      const reqParams = {'fields': REQUEST_FIELDS, 'q': `trashed = false and fullText contains '${searchText}'`}
      GoogleDrive.listLimitedFiles(reqParams, MAX_LIST_COUNT, (items, nextPageToken) => {
        resolve(items || [], nextPageToken)
      })
    }).then( (items, nextPageToken) => {
      // specifying orderBy param in fullText search makes error.
      let blankTime = moment.unix(0).toString()
      items.sort( (a, b) => moment(b.viewedByMeTime || blankTime).unix() - moment(a.viewedByMeTime || blankTime).unix() );
      LocalStore.save(SAVE_KEY_RESULT_MAP[ITEM_TYPE_SEARCH], items)
      LocalStore.save(SAVE_KEY_SEARCH_TEXT, searchText)
      dispatch(showItems(ITEM_TYPE_SEARCH, items))
    })
  }
}

