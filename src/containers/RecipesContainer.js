import React, { Fragment } from 'react'
import { withRouteData, Link } from 'react-static'
import Typography from '@material-ui/core/Typography'

export default withRouteData(({ recipes }) => (
  <Fragment>
    <Typography type="headline" gutterBottom>
      It's blog time.
    </Typography>
    <Typography type="body1" component="div">
      All recipes:
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.title}>
            <Link to={`/recetas-tradicionales/${recipe.slug}`}>
              {recipe.title}
            </Link>
          </li>
        ))}
      </ul>
    </Typography>
  </Fragment>
))
