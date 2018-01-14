import { connect } from 'react-redux'
import { requestCreateNewItem } from '../actions'
import CreateButton from '../components/CreateButton.js'

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCreateClick: (mimeType) => {
      dispatch(requestCreateNewItem(mimeType))
    }
  }
}

const CreateButtonSet = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateButton)

export default CreateButtonSet
