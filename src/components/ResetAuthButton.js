import React, { PropTypes } from 'react'
import styles from './ResetAuthButton.css'

const ResetAuthButton = ({ onClick, disabled }) => (
  <button type="button" id="resetAuthBtn" className={styles.button + ' btn btn-primary' + ( disabled ? ' disabled' : '')} onClick={onClick}>
    <span className={'glyphicon glyphicon-repeat'} aria-hidden="true"></span> {chrome.i18n.getMessage('reset')}
  </button>
)

ResetAuthButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
}

export default ResetAuthButton
