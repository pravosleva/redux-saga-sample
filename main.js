import "babel-polyfill"
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Connected from './Connected'
import store from './store'


function render() {
  ReactDOM.render(
    <Provider store={store}>
      <Connected />
    </Provider>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
