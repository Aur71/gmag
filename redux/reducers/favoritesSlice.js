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
    removeList: (state, action) => {
      console.log(state, action);
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
      const currentMainList = state.lists.find(
        (list) => list.listName === state.mainList
      );
      const isProductInMainList = currentMainList.products.some(
        (product) => product.id === action.payload.id
      );
      if (!isProductInMainList) {
        state.lists.map((list) => {
          if (list.listName === 'All products') {
            list.products.push(action.payload);
          }
          if (list.listName === state.mainList) {
            list.products.push(action.payload);
          }
        });
      }
    },
    removeProduct: (state, action) => {
      console.log(state, action);
    },
  },
});

export default favoritesSlice.reducer;
export const {
  getLists,
  addList,
  removeList,
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
} = favoritesSlice.actions;
