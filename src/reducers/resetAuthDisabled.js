import * as actions from '../actions'

const resetAuthDisabled = (state = false, action) => {
  switch (action.type) {
    case actions.TYPE_SHOW_ITEMS:
      return false

    case actions.TYPE_RESET_AUTH_TOKEN:
      return true

    default:
      return state
  }
}

export default resetAuthDisabled
