import React from 'react'
import { withRouteData, Link } from 'react-static'
import Typography from '@material-ui/core/Typography'

const Recipe = ({ recipe }) => (
  <div>
    <Typography
      type="body1"
      component={Link}
      to="/recetas-tradicionales"
      gutterBottom
    >
      {'<'} Back
    </Typography>
    <Typography type="title" gutterBottom>
      {recipe.title}
    </Typography>
    <Typography type="body1">{recipe.author}</Typography>
  </div>
)

export default withRouteData(Recipe)
