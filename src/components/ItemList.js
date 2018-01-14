import React from 'react'
import moment from 'moment'
import GoogleDrive from '../GoogleDrive.js'
import { requestItems, requestNextPageItems } from '../actions'
import {ITEM_TYPE_RECENT, ITEM_TYPE_FAVORITE, ITEM_TYPE_SEARCH} from '../constants.js'
import styles from './ItemList.css'

const define_initialize_callback = (dispatch) => {
  window.initialize_items_list = () => {
    GoogleDrive.auth(true, () => {
      dispatch(requestItems(ITEM_TYPE_FAVORITE))
    })
  }
}

const register_scroll_callback = (dispatch) => {
  $('#item-list').scroll(function() {
    const scrollTop = $(this).scrollTop()
    const innerHeight = $(this).innerHeight()
    const scrollHeight = $(this)[0].scrollHeight
    const margin = 5
    if (scrollTop + innerHeight + margin < scrollHeight)
      // Do nothing until reaching bottom.
      return

    dispatch(requestNextPageItems())
  })
}

class ItemList extends React.Component {
  componentDidMount() {
    define_initialize_callback(this.props.dispatch)
    $.getScript('https://apis.google.com/js/client.js?onload=initialize_items_list')

    register_scroll_callback(this.props.dispatch)
  }

  render() {
    const { items, isLoading, onCopyClick, onDeleteClick } = this.props
    if (isLoading) {
      return (
        <div>
          <img className={styles.loading} src='./img/loading.gif' alt='loading...' />
        </div>
      )
    }
    return (
      <div id="item-list" className={styles.scrollable}>
        {items.map(item =>
          <div key={item.id} className={styles.item_row + ' row thumbnail'}>
            <div className={'col-xs-1'}>
              <a href={'https://drive.google.com/open?id=' + item.id} target="_blank"><img className={styles.icon} src={item.iconLink} alt={item.name} /></a>
            </div>
            <div className={'col-xs-11'}>
              <h5><a href={'https://drive.google.com/open?id=' + item.id} target="_blank">{item.name}</a></h5>
              <p>
                {chrome.i18n.getMessage('lastViewedAt')}: {item.viewedByMeTime ? moment(item.viewedByMeTime).format(chrome.i18n.getMessage('dateFormat')) : '-'}&nbsp;
                <button className={'btn btn-link'} onClick={e => onCopyClick(item.id)}>{chrome.i18n.getMessage('copy')}</button>&nbsp;
                <button className={'btn btn-link'} onClick={e => onDeleteClick(item.id)}>{chrome.i18n.getMessage('delete')}</button>&nbsp;
              </p>
            </div>
          </div>
        )}
      </div>
    )
  }
}

ItemList.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    mimeType: React.PropTypes.string,
    webViewLink: React.PropTypes.string,
    iconLink: React.PropTypes.string,
    viewedByMeTime: React.PropTypes.string
  }).isRequired).isRequired,
  onCopyClick: React.PropTypes.func.isRequired,
  onDeleteClick: React.PropTypes.func.isRequired
}

export default ItemList

