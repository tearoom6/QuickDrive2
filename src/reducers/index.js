import { combineReducers } from 'redux'
import items from './items.js'
import activeItemType from './activeItemType.js'
import resetAuthDisabled from './resetAuthDisabled.js'
import isLoading from './isLoading.js'

const quickDrive = combineReducers({
  items,
  activeItemType,
  resetAuthDisabled,
  isLoading
})

export default quickDrive
