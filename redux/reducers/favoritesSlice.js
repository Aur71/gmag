import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFavorites = createAsyncThunk(
  'favorites/fetchFavorites',
  async (_, { getState, rejectWithValue }) => {
    const { user } = getState().user;
    if (!user.token) return null;
    const url = `${process.env.NEXT_PUBLIC_API}/api/v1/favorites`;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    };
    try {
      const response = await axios.get(url, { headers });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addList = createAsyncThunk(
  'favorites/addList',
  async (data, { rejectWithValue, getState }) => {
    const { user } = getState().user;
    if (!user.token) return null;

    const url = `${process.env.NEXT_PUBLIC_API}/api/v1/favorites/list`;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    };
    const body = data;
    try {
      const response = await axios.post(url, body, { headers });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editList = createAsyncThunk(
  'favorites/editList',
  async (data, { rejectWithValue, getState }) => {
    const { user } = getState().user;
    if (!user.token) return null;
    const favorites = getState().favorites;
    const activeList = favorites.lists.find(
      (list) => list.name === favorites.activeListName
    );
    const url = `${process.env.NEXT_PUBLIC_API}/api/v1/favorites/list/${activeList._id}`;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    };
    const body = data;
    try {
      const response = await axios.put(url, body, { headers });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteList = createAsyncThunk(
  'favorites/deleteList',
  async (_, { rejectWithValue, getState }) => {
    const { user } = getState().user;
    if (!user.token) return null;
    const favorites = getState().favorites;
    const activeList = favorites.lists.find(
      (list) => list.name === favorites.activeListName
    );
    const url = `${process.env.NEXT_PUBLIC_API}/api/v1/favorites/list/${activeList._id}`;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    };
    try {
      const response = await axios.delete(url, { headers });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeProductFromFavorites = createAsyncThunk(
  'favorites/removeProductFromFavorites',
  async (data, { rejectWithValue, getState }) => {
    const { user } = getState().user;
    if (!user.token) return null;
    const { productId, listId } = data;

    const url = `${process.env.NEXT_PUBLIC_API}/api/v1/favorites/list/${listId}/${productId}`;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    };
    try {
      const response = await axios.delete(url, { headers });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const moveProduct = createAsyncThunk(
  'favorites/moveProduct',
  async (data, { rejectWithValue, getState }) => {
    const { user } = getState().user;
    if (!user.token) return null;
    const { productId, listId, newListId } = data;
    const url = `${process.env.NEXT_PUBLIC_API}/api/v1/favorites/list/${listId}/${productId}/${newListId}`;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    };
    try {
      const response = await axios.put(url, {}, { headers });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    loading: true,
    error: null,
    lists: [
      { name: 'All products', products: [], _id: 1 },
      { name: 'Favorites', products: [], _id: 2 },
    ],
    activeListName: 'All products',
    mainList: 'Favorites',
    showAddListForm: false,
    showEditListForm: false,
    showDeleteListForm: false,
    sortBy: 'Increasing price',
    filterBy: 'All products',
    searchTerm: '',
  },
  reducers: {
    setFavorites: (state, action) => {
      const { mainList, lists } = action.payload;
      state.mainList = mainList;
      state.lists = lists;
    },
    handleSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    handleFilterBy: (state, action) => {
      state.filterBy = action.payload;
    },
    handleSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    openAddListForm: (state) => {
      document.querySelector('body').style.overflow = 'hidden';
      state.showAddListForm = true;
    },
    closeAddListForm: (state) => {
      document.querySelector('body').style.overflow = 'visible';
      state.showAddListForm = false;
    },
    openEditListForm: (state) => {
      document.querySelector('body').style.overflow = 'hidden';
      state.showEditListForm = true;
    },
    closeEditListForm: (state) => {
      document.querySelector('body').style.overflow = 'visible';
      state.showEditListForm = false;
    },
    openDeleteListForm: (state) => {
      document.querySelector('body').style.overflow = 'hidden';
      state.showDeleteListForm = true;
    },
    closeDeleteListForm: (state) => {
      document.querySelector('body').style.overflow = 'visible';
      state.showDeleteListForm = false;
    },
    handleActiveListName: (state, action) => {
      state.activeListName = action.payload;
    },
    resetFavorites: (state) => {
      state.lists = [
        { name: 'All products', products: [], _id: 1 },
        { name: 'Favorites', products: [], _id: 2 },
      ];
      state.mainList = 'Favorites';
      state.activeListName = 'All products';
      localStorage.removeItem('favorites');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        if (!action.payload) {
          state.lists = [
            { name: 'All products', products: [], _id: 1 },
            { name: 'Favorites', products: [], _id: 2 },
          ];
          state.sortBy = 'Increasing price';
          state.filterBy = 'All products';
          state.searchTerm = '';
          state.loading = false;
          return;
        }
        const { mainList, lists } = action.payload;
        state.mainList = mainList;
        state.lists = lists;
        localStorage.setItem('favorites', JSON.stringify(action.payload));
        state.loading = false;
      })
      .addCase(fetchFavorites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addList.fulfilled, (state, action) => {
        const { mainList, lists } = action.payload;
        state.mainList = mainList;
        state.lists = lists;
        state.sortBy = 'Increasing price';
        state.filterBy = 'All products';
        state.searchTerm = '';
        localStorage.setItem('favorites', JSON.stringify(action.payload));
        state.loading = false;
      })
      .addCase(addList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(editList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editList.fulfilled, (state, action) => {
        const { mainList, lists } = action.payload;
        state.mainList = mainList;
        state.lists = lists;
        state.activeListName = state.lists[0].name;
        state.sortBy = 'Increasing price';
        state.filterBy = 'All products';
        state.searchTerm = '';
        localStorage.setItem('favorites', JSON.stringify(action.payload));
        state.loading = false;
      })
      .addCase(editList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteList.fulfilled, (state, action) => {
        state.activeListName = state.lists[0].name;
        const { mainList, lists } = action.payload;
        state.mainList = mainList;
        state.lists = lists;
        state.sortBy = 'Increasing price';
        state.filterBy = 'All products';
        state.searchTerm = '';
        localStorage.setItem('favorites', JSON.stringify(action.payload));
        state.loading = false;
      })
      .addCase(deleteList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(removeProductFromFavorites.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeProductFromFavorites.fulfilled, (state, action) => {
        const { mainList, lists } = action.payload;
        state.mainList = mainList;
        state.lists = lists;
        state.sortBy = 'Increasing price';
        state.filterBy = 'All products';
        state.searchTerm = '';
        localStorage.setItem('favorites', JSON.stringify(action.payload));
        state.loading = false;
      })
      .addCase(removeProductFromFavorites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(moveProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(moveProduct.fulfilled, (state, action) => {
        const { mainList, lists } = action.payload;
        state.mainList = mainList;
        state.lists = lists;
        state.sortBy = 'Increasing price';
        state.filterBy = 'All products';
        state.searchTerm = '';
        localStorage.setItem('favorites', JSON.stringify(action.payload));
        state.loading = false;
      })
      .addCase(moveProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default favoritesSlice.reducer;
export const {
  setFavorites,
  handleSortBy,
  handleFilterBy,
  handleSearchTerm,
  openAddListForm,
  closeAddListForm,
  openEditListForm,
  closeEditListForm,
  openDeleteListForm,
  closeDeleteListForm,
  handleActiveListName,
  resetFavorites,
} = favoritesSlice.actions;
