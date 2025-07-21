export const loadProducts = () => (dispatch, getState) => {
  if (getState().products.items.length === 0) {
    setTimeout(() => {
      const sampleProducts = [
        {
          id: '123456',
          name: 'Example Product 1',
          price: 9.99,
          catalogs: ['catalog1', 'catalog2'],
        },
        {
          id: '789012',
          name: 'Example Product 2',
          price: 19.99,
          catalogs: ['catalog3', 'catalog4'],
        },
      ];
      dispatch({ type: 'LOAD_PRODUCTS', payload: sampleProducts });
    }, 1000);
  }
};

export const addProduct = (product) => dispatch => {
  return new Promise(resolve => {
    setTimeout(() => {
      dispatch({ type: 'ADD_PRODUCT', payload: { ...product, id: Date.now().toString() } });
      resolve();
    }, 500);
  });
};