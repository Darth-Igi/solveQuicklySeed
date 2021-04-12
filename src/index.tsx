import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import configureStore, { history } from './configStore'

const store = configureStore()
const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
  )  
}

render()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
