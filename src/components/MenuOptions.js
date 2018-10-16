import React, { Fragment } from 'react'
import { Link } from 'react-static'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'

const styles = () => ({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 0
  }
})

const MenuOptions = ({ classes }) => (
  <Fragment>
    <List>
      <ListItem button>
        <Avatar
          alt="La Idea"
          src="/img/iconos/idea-proyecto.svg"
          className={classes.avatar}
        />
        <ListItemText primary="La Idea" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/recetas-tradicionales"
        label="Recetas Tradicionales"
      >
        <Avatar
          alt="Recetas Tradicionales"
          src="/img/iconos/olla-cocina-tradicional.png"
          className={classes.avatar}
        />
        <ListItemText primary="Recetas Tradicionales" />
      </ListItem>
      <ListItem button>
        <Avatar
          alt="Mapa Gastronómico"
          src="/img/iconos/mapa-gastronomico.svg"
          className={classes.avatar}
        />
        <ListItemText primary="Mapa Gastronómico" />
      </ListItem>
      <ListItem button>
        <Avatar
          alt="Productos de Calidad"
          src="/img/iconos/productos-tradicionales.svg"
          className={classes.avatar}
        />
        <ListItemText primary="Productos de Calidad" />
      </ListItem>
    </List>
    <Divider />
    <List>
      <ListItem button>
        <Avatar
          alt="¡Escríbenos!"
          src="/img/iconos/contacto.svg"
          className={classes.avatar}
        />
        <ListItemText primary="¡Escríbenos!" />
      </ListItem>
    </List>
  </Fragment>
)

MenuOptions.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MenuOptions)
