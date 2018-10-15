import React from 'react'
import { Router, Link } from 'react-static'
import Routes from 'react-static-routes'
import { hot } from 'react-hot-loader'
import { compose, lifecycle } from 'recompose'

import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { withStyles } from '@material-ui/core/styles'

// Custom styles
const styles = {
  '@global': {
    img: {
      maxWidth: '100%'
    }
  },
  appBar: {
    flexWrap: 'wrap'
  },
  tabs: {
    width: '100%'
  },
  content: {
    padding: '1rem'
  }
}

const App = props => {
  const { classes } = props

  return (
    <Router>
      <div className={classes.container}>
        <CssBaseline />
        <AppBar className={classes.appBar} color="default" position="static">
          <nav>
            <Tabs className={classes.tabs} value={false}>
              <Tab component={Link} to="/" label="Home" />
              <Tab component={Link} to="/about" label="About" />
              <Tab component={Link} to="/blog" label="Blog" />
            </Tabs>
          </nav>
        </AppBar>
        <div className={classes.content}>
          <Routes />
        </div>
      </div>
    </Router>
  )
}

const withLifecycle = lifecycle({
  // Remove the server-side injected CSS.
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  }
})

const AppWithStyles = compose(
  withLifecycle,
  withStyles(styles)
)(App)

export default hot(module)(AppWithStyles)
