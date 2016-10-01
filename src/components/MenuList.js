import React, { PropTypes } from 'react'
import SelectMenu from '../containers/SelectMenu.js'
import {ITEM_TYPE_RECENT, ITEM_TYPE_FAVORITE, ITEM_TYPE_SEARCH} from '../constants.js'

const MenuList = () => (
  <ul className={'nav nav-tabs'}>
    <SelectMenu itemType={ITEM_TYPE_FAVORITE}>
      {chrome.i18n.getMessage('favorite')}
    </SelectMenu>
    <SelectMenu itemType={ITEM_TYPE_RECENT}>
      {chrome.i18n.getMessage('recent')}
    </SelectMenu>
    <SelectMenu itemType={ITEM_TYPE_SEARCH}>
      {chrome.i18n.getMessage('search')}
    </SelectMenu>
  </ul>
)

export default MenuList
