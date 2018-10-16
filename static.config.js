import React, { Component } from 'react'
import { SheetsRegistry } from 'react-jss/lib/jss'
import JssProvider from 'react-jss/lib/JssProvider'
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName
} from '@material-ui/core/styles'

// Your Material UI Custom theme
import theme from './src/theme'

import { recipes } from './content/recipes'

export default {
  getSiteData: () => ({
    title: 'React Static'
  }),
  getRoutes: () => [
    {
      path: '/',
      component: 'src/containers/Home'
    },
    {
      path: '/about',
      component: 'src/containers/About'
    },
    {
      path: '/recetas-tradicionales',
      component: 'src/containers/RecipesContainer',
      getData: () => ({ recipes }),
      children: recipes.map(recipe => ({
        path: `/${recipe.slug}`,
        component: 'src/containers/Recipe',
        getData: () => ({ recipe })
      }))
    },
    {
      is404: true,
      component: 'src/containers/404'
    }
  ],
  renderToHtml: (render, Comp, meta) => {
    // Create a sheetsRegistry instance.
    const sheetsRegistry = new SheetsRegistry()

    // Create a MUI theme instance.
    const muiTheme = createMuiTheme(theme)

    const generateClassName = createGenerateClassName()

    const html = render(
      <JssProvider
        registry={sheetsRegistry}
        generateClassName={generateClassName}
      >
        <MuiThemeProvider theme={muiTheme} sheetsManager={new Map()}>
          <Comp />
        </MuiThemeProvider>
      </JssProvider>
    )

    meta.jssStyles = sheetsRegistry.toString()

    return html
  },
  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Special+Elite"
              rel="stylesheet"
            />
            >
          </Head>
          <Body>
            {children}
            <style id="jss-server-side">{renderMeta.jssStyles}</style>
          </Body>
        </Html>
      )
    }
  }
}
