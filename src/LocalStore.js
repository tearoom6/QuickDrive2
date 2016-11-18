const save = (key, value) => {
  let storeObj = {}
  storeObj[key] = value
  chrome.storage.local.set(storeObj)
}

const load = (key, callback) => {
  chrome.storage.local.get(key, callback)
}

const remove = (key) => {
  chrome.storage.local.remove(key)
}

const clear = () => {
  chrome.storage.local.clear()
}

const LocalStore = {
  save,
  load,
  remove,
  clear
}

export default LocalStore
