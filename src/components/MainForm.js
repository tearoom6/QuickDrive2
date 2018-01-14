import React from 'react'
import ResetAuthButtonSet from '../containers/ResetAuthButtonSet.js'
import SearchBoxSet from '../containers/SearchBoxSet.js'
import CreateButtonSet from '../containers/CreateButtonSet.js'

const MainForm = () => (
  <form className={'form-inline'}>
    <small><a className={'none'} href="https://drive.google.com/drive/my-drive" target="_blank" tabIndex="-1">{chrome.i18n.getMessage('extName')}</a></small>
    <SearchBoxSet />
    <CreateButtonSet />
    <ResetAuthButtonSet />
  </form>
)

export default MainForm
