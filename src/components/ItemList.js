import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import GoogleDrive from '../GoogleDrive.js'
import { requestItems } from '../actions'
import {ITEM_TYPE_RECENT, ITEM_TYPE_FAVORITE, ITEM_TYPE_SEARCH} from '../constants.js'
import styles from './ItemList.css'

const define_initialize_callback = (dispatch) => {
  window.initialize_items_list = () => {
    GoogleDrive.auth(true, () => {
      dispatch(requestItems(ITEM_TYPE_FAVORITE))
    })
  }
}

class ItemList extends React.Component {
  componentDidMount() {
    define_initialize_callback(this.props.dispatch)
    $.getScript('https://apis.google.com/js/client.js?onload=initialize_items_list')
  }

  render() {
    const { items } = this.props
    return (
      <div>
        {items.map(item =>
          <div key={item.id} className={styles.item_row + ' row thumbnail'}>
            <div className={'col-xs-1'}>
              <a href={item.mimeType != 'application/vnd.google-apps.folder' ? item.webViewLink : 'https://drive.google.com/drive/#folders/' + item.id} target="_blank"><img className={styles.icon} src={item.iconLink} alt={item.name} width="32" height="32" /></a>
            </div>
            <div className={'col-xs-11'}>
              <h5><a href={item.mimeType != 'application/vnd.google-apps.folder' ? item.webViewLink : 'https://drive.google.com/drive/#folders/' + item.id} target="_blank">{item.name}</a></h5>
              <p>{chrome.i18n.getMessage('lastViewedAt')}: {item.viewedByMeTime ? moment(item.viewedByMeTime).format(chrome.i18n.getMessage('dateFormat')) : '-'}</p>
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
  }).isRequired).isRequired
}

export default ItemList
