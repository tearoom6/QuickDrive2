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
    onCopyClick: (itemId) => {
      dispatch(requestCopyItem(itemId))
    },
    onDeleteClick: (itemId) => {
      dispatch(requestDeleteItem(itemId))
    }
  }
}

const CurrentItemList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)

export default CurrentItemList
