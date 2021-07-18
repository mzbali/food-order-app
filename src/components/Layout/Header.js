import React, { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';

import classes from './Header.module.css';
import image from '../../assets/meals.jpg';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>FoodDash</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={image} alt="A table of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
