import { combineReducers } from 'redux'
import items from './items.js'
import activeItemType from './activeItemType.js'
import resetAuthDisabled from './resetAuthDisabled.js'

const quickDrive = combineReducers({
  items,
  activeItemType,
  resetAuthDisabled
})

export default quickDrive
