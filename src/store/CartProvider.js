import { useReducer } from 'react';
import CartContext from './cart-context';

const initialCart = {
  items: [{ name: 'Hilsha', amount: 1 }],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item);
    const UpdatedtotalPrice =
      state.totalPrice + state.items.amount * state.items.price;
    return { items: updatedItems, totalPrice: UpdatedtotalPrice };
  }
};

const CartProvider = (props) => {
  const [cart, dispatchCart] = useReducer(cartReducer, initialCart);
  const addItemToCart = (item) => {
    dispatchCart({ type: 'ADD', item: item });
  };
  const removeItemFromCart = (id) => {};

  const cartContext = {
    items: cart.items,
    totalPrice: cart.totalPrice,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
