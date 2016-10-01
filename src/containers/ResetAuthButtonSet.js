import { connect } from 'react-redux'
import { resetAuthToken } from '../actions'
import ResetAuthButton from '../components/ResetAuthButton.js'

const mapStateToProps = (state, ownProps) => {
  return {
    disabled: state.resetAuthDisabled
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(resetAuthToken())
    }
  }
}

const ResetAuthButtonSet = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetAuthButton)

export default ResetAuthButtonSet
