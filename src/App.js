import React, { Fragment, useState } from 'react';

import Meals from './components/Meals/Meals';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const cartShowHandler = () => {
    setCartIsShown(true);
  };

  const cartHideHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onHideCart={cartHideHandler} />}
      <Header onShowCart={cartShowHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
