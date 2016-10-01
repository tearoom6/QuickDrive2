import * as actions from '../actions'

const items = (state = [], action) => {
  switch (action.type) {
    case actions.TYPE_SHOW_ITEMS:
      return action.items

    default:
      return state
  }
}

export default items
