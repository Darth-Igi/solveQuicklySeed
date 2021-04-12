import React from 'react'
import { Switch, Route } from 'react-router'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { ConnectedRouter } from 'connected-react-router'
import { makeStyles } from '@material-ui/core/styles'
import { History } from 'history'

import Home from './containers/Home'
import { theme } from './theme'
import './App.css'
import AppFrame from './containers/AppFrame'

interface AppProps {
  history: History;
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}))

const App = ({ history }: AppProps) => {
  const classes = useStyles()
  
  return (
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <AppFrame />
          <Switch>
            <Route exact path="/" component={Home} />
            {/*
            <Route path="/hello" component={Hello} />
            <Route path="/counter" component={Counter} />
            <Route component={NoMatch} />
          */}
          </Switch>
        </div>
      </ThemeProvider>
    </ConnectedRouter>
  )
}

export default App
