import React from 'react'
import PropTypes from 'prop-types'

const Menu = ({ onMenuClick, active, children }) => (
  <li role="presentation"
      className={ active ? 'active' : '' }>
    <a href="#" onClick={onMenuClick} tabIndex="0">{children}</a>
  </li>
)

Menu.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}

export default Menu
