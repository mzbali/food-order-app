import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const items = cartCtx.items;
  const totalAmountOfMeal = cartCtx.items.reduce((totalAmount, item) => {
    return totalAmount + item.amount;
  }, 0);
  const [btnAnimate, setBtnAnimate] = useState(false);

  const btnClass = `${classes.button} ${btnAnimate ? classes.bump : ''}`;

  useEffect(() => {
    setBtnAnimate(true);
    const timer = setTimeout(() => {
      setBtnAnimate(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClass} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalAmountOfMeal}</span>
    </button>
  );
};

export default HeaderCartButton;
