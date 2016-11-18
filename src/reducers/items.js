import * as actions from '../actions'

const items = (state = [], action) => {
  switch (action.type) {
    case actions.TYPE_SHOW_ITEMS:
      return action.items

    case actions.TYPE_SHOW_ADDITIONAL_ITEMS:
      return state.concat(action.items)

    default:
      return state
  }
}

export default items
