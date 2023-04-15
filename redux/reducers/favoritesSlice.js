import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    lists: [
      {
        listName: 'All products',
        products: [],
      },
      {
        listName: 'Favorite',
        products: [],
      },
    ],
    activeListName: 'All products',
    mainList: 'Favorite',
    showAddListForm: false,
    showEditListForm: false,
    showDeleteListForm: false,

    sortProducts: 'Newest',
    filterProducts: 'All products',
    searchProducts: '',
  },
  reducers: {
    getLists: (state, action) => {
      state.lists = action.payload;
    },
    addList: (state, action) => {
      const list = {
        listName: action.payload,
        products: [],
      };
      state.lists.push(list);
    },
    handleActiveListName: (state, action) => {
      state.activeListName = action.payload;
    },
    handleMainList: (state, action) => {
      state.mainList = action.payload;
    },
    handleAddListForm: (state, action) => {
      const body = document.querySelector('body');
      if (action.payload) body.style.overflow = 'hidden';
      else body.style.overflow = 'visible';
      state.showAddListForm = action.payload;
    },
    handleEditListForm: (state, action) => {
      const body = document.querySelector('body');
      if (action.payload) body.style.overflow = 'hidden';
      else body.style.overflow = 'visible';
      state.showEditListForm = action.payload;
    },
    editList: (state, action) => {
      state.lists.map((list) => {
        if (list.listName === state.activeListName) {
          list.listName = action.payload;
        }
      });
      state.activeListName = action.payload;
      const doesListsContainMainListName = state.lists.some(
        (list) => list.listName === state.mainList
      );
      if (!doesListsContainMainListName)
        state.mainList = state.lists[1].listName;
    },
    handleDeleteForm: (state, action) => {
      state.showDeleteListForm = action.payload;
    },
    deleteList: (state) => {
      if (state.activeListName === state.mainList)
        state.mainList = state.lists[1].listName;

      state.lists = state.lists.filter(
        (list) => list.listName !== state.activeListName
      );
      state.activeListName = state.lists[0].listName;
      state.lists[0].products = [];
      state.lists.forEach((list) => {
        if (list.listName === 'All products') return;
        list.products.forEach((product) =>
          state.lists[0].products.push(product)
        );
      });
      state.showDeleteListForm = false;
    },
    handleSortProducts: (state, action) => {
      state.sortProducts = action.payload;
    },
    handleFilterProducts: (state, action) => {
      state.filterProducts = action.payload;
    },
    handleSearchProducts: (state, action) => {
      state.searchProducts = action.payload;
    },
    addProduct: (state, action) => {
      const timestamp = new Date().getTime();
      const product = action.payload;
      product.date = timestamp;

      const currentMainList = state.lists.find(
        (list) => list.listName === state.mainList
      );
      const isProductInMainList = currentMainList.products.some(
        (product) => product.id === action.payload.id
      );
      if (!isProductInMainList) {
        state.lists.map((list) => {
          if (
            list.listName === 'All products' ||
            list.listName === state.mainList
          ) {
            list.products.push(product);
          }
        });
      }
    },
    removeProduct: (state, action) => {
      state.lists = state.lists.map((list) => {
        if (
          list.listName === 'All products' ||
          list.listName === action.payload.listName
        ) {
          list.products = list.products.filter(
            (product) => product.id !== action.payload.id
          );
        }

        return list;
      });
    },
    moveProduct: (state, action) => {
      if (action.payload.listName === action.payload.moveTo) return;

      state.lists = state.lists.map((list) => {
        if (list.listName === action.payload.listName) {
          list.products = list.products.filter(
            (product) => product.id !== action.payload.id
          );
        }
        if (list.listName === action.payload.moveTo) {
          const isProductAlreadyIn = list.products.some(
            (product) => product.id === action.payload.product.id
          );
          if (!isProductAlreadyIn) list.products.push(action.payload.product);
        }

        return list;
      });
    },
  },
});

export default favoritesSlice.reducer;
export const {
  getLists,
  addList,
  handleActiveListName,
  handleMainList,
  handleAddListForm,
  handleEditListForm,
  editList,
  handleDeleteForm,
  deleteList,
  handleSortProducts,
  handleFilterProducts,
  handleSearchProducts,
  addProduct,
  removeProduct,
  moveProduct,
} = favoritesSlice.actions;
