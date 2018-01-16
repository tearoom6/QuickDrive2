import { connect } from 'react-redux'
import { requestCopyItem, requestDeleteItem } from '../actions'
import ItemList from '../components/ItemList.js'

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.items,
    isLoading: state.isLoading
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch: dispatch,
    onCopyClick: (itemId, event) => {
      dispatch(requestCopyItem(itemId))
    },
    onDeleteClick: (itemId, event) => {
      $(`#delete-${itemId}`).confirmation({
        rootSelector: `#delete-${itemId}`,
        placement: 'left',
        singleton: true,
        popout: true,
        onConfirm: () => {
          dispatch(requestDeleteItem(itemId))
        }
      }).confirmation('show')
    }
  }
}

const CurrentItemList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)

export default CurrentItemList
