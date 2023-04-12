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
    mainList: 'All products',
    showAddListForm: false,

    sortProducts: 'Newest',
    filterProducts: 'All products',
    searchProducts: '',
  },
  reducers: {
    getLists: (state, action) => {
      state.lists = action.payload;
    },
    addList: (state, action) => {
      console.log(state, action);
    },
    removeList: (state, action) => {
      console.log(state, action);
    },
    handleActiveListName: (state, action) => {
      state.activeListName = action.payload;
    },
    handleAddListForm: (state, action) => {
      const body = document.querySelector('body');
      if (action.payload) body.style.overflow = 'hidden';
      else body.style.overflow = 'visible';
      state.showAddListForm = action.payload;
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
  },
});

export default favoritesSlice.reducer;
export const {
  getLists,
  addList,
  removeList,
  handleActiveListName,
  handleAddListForm,
  handleSort,
  handleFilter,
  handleSearch,
} = favoritesSlice.actions;
