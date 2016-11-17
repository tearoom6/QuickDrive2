import React, { PropTypes } from 'react'
import LocalStore from '../LocalStore.js'
import {SAVE_KEY_SEARCH_TEXT} from '../constants.js'
import styles from './SearchBox.css'

let input

class SearchBox extends React.Component {
  componentDidMount() {
    LocalStore.load(SAVE_KEY_SEARCH_TEXT, (items) => {
      input.value = (items[SAVE_KEY_SEARCH_TEXT] || '')
    })
  }

  render() {
    const { onKeyDown, onSearchClick } = this.props
    return (
      <span>
        <div className={styles.button + ' form-group'}>
          <label className={'sr-only'} htmlFor="searchBox">Search Box</label>
          <input type="text" className={'form-control'} id="searchBox" placeholder={chrome.i18n.getMessage('search_text')} ref={node => input = node} onKeyDown={e => onKeyDown(input.value, e)}/>
        </div>
        <div className={'btn-group'}>
          <button type="button" className={'btn btn-danger'} onClick={e => onSearchClick(input.value, e)}>{chrome.i18n.getMessage('search')}</button>
          <button type="button" className={'btn btn-danger dropdown-toggle'} data-toggle="dropdown" aria-expanded="false">
            <span className={'caret'}></span>
            <span className={'sr-only'}>Toggle Dropdown</span>
          </button>
          <ul className={'dropdown-menu'} role="menu">
            <li><a onClick={e => input.value = ''}>{chrome.i18n.getMessage('clear')}</a></li>
          </ul>
        </div>
      </span>
    )
  }
}

SearchBox.propTypes = {
  onKeyDown: PropTypes.func.isRequired,
  onSearchClick: PropTypes.func.isRequired
}

export default SearchBox
