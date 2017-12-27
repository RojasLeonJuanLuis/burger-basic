import React from 'react'
import BurgerIngredients from './burger-ingredients/burger-ingredients'
import classes from './burger.css'

const Burger = (props) => (
  <div className={classes.burger}>
    <BurgerIngredients type="bread-top" />
    <BurgerIngredients type="cheese" />
    <BurgerIngredients type="meat" />
    <BurgerIngredients type="bread-bottom" />
  </div>
)
export default Burger
