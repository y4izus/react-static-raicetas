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

import NavBar from './components/NavBar'

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

const App = ({ classes }) => (
  <Router>
    <div className={classes.container}>
      <CssBaseline />
      {/* <AppBar className={classes.appBar} color="default" position="static">
        <nav>
          <Tabs className={classes.tabs} value={false}>
            <Tab component={Link} to="/" label="Home" />
            <Tab component={Link} to="/about" label="About" />
            <Tab
              component={Link}
              to="/recetas-tradicionales"
              label="Recetas Tradicionales"
            />
          </Tabs>
        </nav>
      </AppBar> */}
      <NavBar className={classes.content}>
        <Routes />
      </NavBar>
    </div>
  </Router>
)

const withLifecycle = lifecycle({
  // Remove the server-side injected CSS.
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  }
})

export default compose(
  withLifecycle,
  withStyles(styles),
  hot(module)
)(App)
