import React, { Component } from 'react'
import Burger from '../../components/burger/burger'
import Aux from '../../hoc/aux'

class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <Burger />
        <div>Build Controls</div>
      </Aux>
    )
  }
}
export default BurgerBuilder
