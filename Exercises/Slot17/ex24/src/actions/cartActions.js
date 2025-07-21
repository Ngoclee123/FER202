export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: product,
});

export const updateCart = (id, quantity) => ({
  type: 'UPDATE_CART',
  payload: { id, quantity },
});

export const removeFromCart = (id) => ({
  type: 'REMOVE_FROM_CART',
  payload: { id },
});