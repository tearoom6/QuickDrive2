import React, { PropTypes } from 'react'
import styles from './CreateButton.css'

const CreateButton = ({ onCreateClick }) => (
    <div className={styles.button + ' btn-group'}>
      <button type="button" className={'btn btn-success dropdown-toggle'} data-toggle="dropdown">
        {chrome.i18n.getMessage('create')}&nbsp;
        <span className={'caret'}></span>
      </button>
      <ul className={'dropdown-menu'} role="menu">
        <li><a tabIndex="0" onClick={e => onCreateClick('application/vnd.google-apps.folder')}>{chrome.i18n.getMessage('type_folder')}</a></li>
        <li><a tabIndex="0" onClick={e => onCreateClick('application/vnd.google-apps.document')}>{chrome.i18n.getMessage('type_doc')}</a></li>
        <li><a tabIndex="0" onClick={e => onCreateClick('application/vnd.google-apps.spreadsheet')}>{chrome.i18n.getMessage('type_sheet')}</a></li>
        <li><a tabIndex="0" onClick={e => onCreateClick('application/vnd.google-apps.presentation')}>{chrome.i18n.getMessage('type_slide')}</a></li>
        <li><a tabIndex="0" onClick={e => onCreateClick('application/vnd.google-apps.form')}>{chrome.i18n.getMessage('type_form')}</a></li>
        <li><a tabIndex="0" onClick={e => onCreateClick('application/vnd.google-apps.drawing')}>{chrome.i18n.getMessage('type_drawing')}</a></li>
      </ul>
    </div>
)

CreateButton.propTypes = {
  onCreateClick: PropTypes.func.isRequired
}

export default CreateButton
