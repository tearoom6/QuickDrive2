import * as actions from '../actions'
import {ITEM_TYPE_RECENT, ITEM_TYPE_FAVORITE, ITEM_TYPE_SEARCH} from '../constants.js'

const activeItemType = (state = ITEM_TYPE_FAVORITE, action) => {
  switch (action.type) {
    case actions.TYPE_SHOW_ITEMS:
      return action.itemType

    case actions.TYPE_SEARCH_ITEMS:
      return ITEM_TYPE_SEARCH

    default:
      return state
  }
}

export default activeItemType
