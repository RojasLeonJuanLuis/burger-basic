import React from 'react'
import classes from './burger-ingredients.css'

const BurgerIngredient = (props) => (
  let ingredient = null

  switch(props.type) {
    case('bread-bottom'):
      ingredient = <div className={classes.bread-bottom}></div>
      break
    case('bread-top'):
      ingredient = (
        <div className={classes.bread-top}>
          <div className={classes.seeds1}></div>
          <div className={classes.seeds2}></div>
        </div>
      )
      break
    case('meat'):
      ingredient = <div className={classes.meat}></div>
      break
    case('cheese'):
      ingredient = <div className={classes.cheese}></div>
      break
    case('bacon'):
      ingredient = <div className={classes.bacon}></div>
      break
    case('salad'):
      ingredient = <div className={classes.salad}></div>
      break
    default:
      ingredient = null
  }
  return ingredient
)
export default BurgerIngredient
