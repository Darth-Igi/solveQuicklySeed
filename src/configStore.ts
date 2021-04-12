import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { devToolsEnhancer } from 'redux-devtools-extension'
import rootReducer from './reducers'

// import scanReducer from './pages/scan/scan-reducer'
// import userSettingsReducer from './pages/user-settings/user-settings-reducer'
// import userValuesReducer from './reducers/user-values-reducer'
// import homeReducer from './pages/home/home-reducer'
// import workEntryReducer from './pages/work-entry/work-entry-reducer'

export const history = createBrowserHistory()

export default function configureStore(preloadedState?: any) {
  const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    rootReducer(history),
    preloadedState,
    composeEnhancer(
      applyMiddleware(
        routerMiddleware(history),
      ),
    ),
  )

  return store

  // return process.env.NODE_ENV === 'development'
  //   ? createStore(rootReducer, devToolsEnhancer({}))
  //   : createStore(rootReducer)
}
