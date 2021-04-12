import React from 'react'
import { Switch, Route } from 'react-router'
import { ThemeProvider } from '@material-ui/core'
import { ConnectedRouter } from 'connected-react-router'
import { History } from 'history'

import Home from './components/Home'
import { theme } from './theme'
import './App.css'

interface AppProps {
  history: History;
}

const App = ({ history }: AppProps) => {
  return (
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={Home} />
          {/*
            <Route path="/hello" component={Hello} />
            <Route path="/counter" component={Counter} />
            <Route component={NoMatch} />
          */}
        </Switch>
      </ThemeProvider>
    </ConnectedRouter>
  )
}

export default App
