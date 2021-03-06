import React from 'react'
import Aux from '../../hoc/aux'
import classes from './layout.css'

const Layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.content}>
      {props.children}
    </main>
  </Aux>
)
export default Layout
