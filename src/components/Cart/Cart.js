import Modal from '../UI/Modal';

import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItems = [
    { id: 'c1', name: 'sushi', amount: '5', price: '23.4' },
  ].map((item) => <li>{item.name}</li>);
  return (
    <Modal onClose={props.onHideCart}>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$35.6</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['alt--botton']} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
