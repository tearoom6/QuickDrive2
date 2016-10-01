import { connect } from 'react-redux'
import { onSearchBoxKeyDown, requestSearchItems, clearSearchBox } from '../actions'
import SearchBox from '../components/SearchBox.js'

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onKeydown: (text, event) => {
      if (event.keyCode === 13) {
        // to prevent page refresh
        event.preventDefault()
        dispatch(requestSearchItems(text))
      }
    },
    onSearchClick: (searchText, event) => {
      dispatch(requestSearchItems(searchText))
    }
  }
}

const SearchBoxSet = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox)

export default SearchBoxSet
