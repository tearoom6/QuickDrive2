import * as actions from '../actions'

const isLoading = (state = false, action) => {
  switch (action.type) {
    case actions.TYPE_SEARCH_ITEMS:
      return true

    case actions.TYPE_SHOW_ITEMS:
      return false

    default:
      return state
  }
}

export default isLoading
