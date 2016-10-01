import React from 'react'
import Form from '../components/MainForm.js'
import MenuList from '../components/MenuList.js'
import CurrentItemList from '../containers/CurrentItemList.js'

const App = () => (
  <div className={'container'}>
    <h1>
      <Form />
    </h1>
    <MenuList />
    <CurrentItemList />
  </div>
)

export default App
