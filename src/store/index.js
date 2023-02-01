import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
  state () {
    return {
      forEdit: null,
      products: [{
        name: 'Lorem Ipsum',
        price: 10
      },
      {
        name: 'Lorem Ipsum',
        price: 10
      },
      {
        name: 'Lorem Ipsum',
        price: 10
      },
      {
        name: 'Lorem Ipsum',
        price: 10
      },
      {
        name: 'Lorem Ipsum',
        price: 10
      },
      {
        name: 'Lorem Ipsum',
        price: 10
      },
      {
        name: 'Lorem Ipsum',
        price: 10
      },
    ]
    }
  },
  mutations: {
    addProduct ({products}, {product}) {
      products.push(product);
    },
    setForEdit(state, {ind}) {
      state.forEdit = ind;
    },
    editProduct (state, {product}) {
      state.products[state.forEdit].name = product.name;
      state.products[state.forEdit].price = product.price;
      state.forEdit = null;
    },
    deleteProduct ({products}, {ind}) {
      products.splice(ind, 1);
    }
  },
  getters: {
    getForEdit(state) {
      return state.forEdit
    }
  },
});
