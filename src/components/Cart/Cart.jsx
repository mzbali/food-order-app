import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const items = cartCtx.items;
  let showOrderBtn = false;

  if (items.length > 0) {
    showOrderBtn = true;
  }

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <Modal onClose={props.onHideCart}>
      <ul className={classes["cart-items"]}>
        {items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={addItemHandler.bind(null, item)}
            onRemove={removeItemHandler.bind(null, item.id)}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Price</span>
        <span>{cartCtx.totalPrice.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["alt--botton"]} onClick={props.onHideCart}>
          Close
        </button>
        {showOrderBtn && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
