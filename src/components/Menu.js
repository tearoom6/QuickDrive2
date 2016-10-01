import React, { PropTypes } from 'react'

const Menu = ({ onMenuClick, active, children }) => (
  <li role="presentation"
      className={ active ? 'active' : '' }>
    <a onClick={onMenuClick}>{children}</a>
  </li>
)

Menu.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}

export default Menu
