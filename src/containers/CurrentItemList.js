import { connect } from 'react-redux'
import ItemList from '../components/ItemList.js'

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.items,
    isLoading: state.isLoading
  }
}

const CurrentItemList = connect(
  mapStateToProps
)(ItemList)

export default CurrentItemList
