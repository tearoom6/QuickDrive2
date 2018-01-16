import * as actions from '../actions'

const items = (state = [], action) => {
  switch (action.type) {
    case actions.TYPE_SHOW_ITEMS:
      return action.items

    case actions.TYPE_SHOW_ADDITIONAL_ITEMS:
      return state.concat(action.items)

    case actions.TYPE_REMOVE_ITEM:
      return state.filter( (item) => {
        return item.id != action.itemId
      })

    default:
      return state
  }
}

export default items
