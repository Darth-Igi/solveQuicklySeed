import { combineReducers } from 'redux'
import { History } from 'history'
import { RouterState, connectRouter } from 'connected-react-router'

import appFrameReducer from './app-frame-reducer'

// import scanReducer from './pages/scan/scan-reducer'
// import userSettingsReducer from './pages/user-settings/user-settings-reducer'
// import userValuesReducer from './reducers/user-values-reducer'
// import homeReducer from './pages/home/home-reducer'
// import workEntryReducer from './pages/work-entry/work-entry-reducer'

const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  appFrame: appFrameReducer,
  // scan: scanReducer,
  // userSettings: userSettingsReducer,
  // userValues: userValuesReducer,
  // homeReducer: homeReducer,
  // workEntryReducer: workEntryReducer,
})

export interface State {
  router: RouterState
}

export default rootReducer
