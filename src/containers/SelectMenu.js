import { connect } from 'react-redux'
import { requestItems } from '../actions'
import Menu from '../components/Menu.js'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.itemType === state.activeItemType
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onMenuClick: () => {
      dispatch(requestItems(ownProps.itemType))
    }
  }
}

const SelectMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)

export default SelectMenu
