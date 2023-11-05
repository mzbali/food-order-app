import { useReducer } from 'react';
import CartContext from './cart-context';

const initialCart = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    let updatedItems = [...state.items];
    const updatedTotalPrice =
      state.totalPrice + action.item.amount * action.item.price;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    if (existingItemIndex !== -1) {
      let updatedItem = state.items[existingItemIndex];
      updatedItem.amount = updatedItem.amount + action.item.amount;
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return { items: updatedItems, totalPrice: updatedTotalPrice };
  }
  if (action.type === 'REMOVE') {
    let updatedItems = [...state.items];
    let existingItemIndex = updatedItems.findIndex(
      (item) => item.id === action.id
    );
    let updatedItem = updatedItems[existingItemIndex];
    const updatedTotalPrice = state.totalPrice - updatedItem.price;
    if (updatedItem.amount === 1) {
      updatedItems = updatedItems.filter((item) => item.id !== action.id);
    } else {
      updatedItem.amount = updatedItem.amount - 1;
      updatedItems[existingItemIndex] = updatedItem;
    }
    return { items: updatedItems, totalPrice: updatedTotalPrice };
  }
  return initialCart;
};

const CartProvider = (props) => {
  const [cart, dispatchCart] = useReducer(cartReducer, initialCart);
  const addItemToCart = (item) => {
    dispatchCart({ type: 'ADD', item: item });
  };
  const removeItemFromCart = (id) => {
    dispatchCart({ type: 'REMOVE', id: id });
  };

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
