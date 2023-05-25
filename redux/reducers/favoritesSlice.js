import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFavorites = createAsyncThunk(
  'favorites/fetchFavorites',
  async (_, { getState, rejectWithValue }) => {
    const { user } = getState().user;

    console.log(user);

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

// export const addList = createAsyncThunk(
//   'favorites/addList',
//   async (_, { rejectWithValue }) => {
//     const user = JSON.parse(localStorage.getItem('user'));
//     if (!user.token) return null;
//     const url = `${process.env.NEXT_PUBLIC_API}/api/v1/favorites`;
//     const headers = {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${user.token}`,
//     };
//     try {
//       const response = await axios.get(url, { headers });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.loading = false;
        if (!action.payload) {
          state.lists = [
            { name: 'All products', products: [], _id: 1 },
            { name: 'Favorites', products: [], _id: 2 },
          ];
          return;
        }
        const { mainList, lists } = action.payload.favorites;
        state.mainList = mainList;
        state.lists = lists;
      })
      .addCase(fetchFavorites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default favoritesSlice.reducer;
export const {
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
} = favoritesSlice.actions;

// import { createSlice } from '@reduxjs/toolkit';

// const favoritesSlice = createSlice({
//   name: 'favorites',
//   initialState: {
//     lists: [
//       {
//         listName: 'All products',
//         products: [],
//       },
//       {
//         listName: 'Favorite',
//         products: [],
//       },
//     ],
//     activeListName: 'All products',
//     mainList: 'Favorite',
//     showAddListForm: false,
//     showEditListForm: false,
//     showDeleteListForm: false,

//     sortProducts: 'Newest',
//     filterProducts: 'All products',
//     searchProducts: '',
//   },
//   reducers: {
//     getLists: (state, action) => {
//       state.lists = action.payload;
//     },
//     addList: (state, action) => {
//       const list = {
//         listName: action.payload,
//         products: [],
//       };
//       state.lists.push(list);
//     },
//     handleActiveListName: (state, action) => {
//       state.activeListName = action.payload;
//     },
//     handleMainList: (state, action) => {
//       state.mainList = action.payload;
//     },

//     editList: (state, action) => {
//       state.lists.map((list) => {
//         if (list.listName === state.activeListName) {
//           list.listName = action.payload;
//         }
//       });
//       state.activeListName = action.payload;
//       const doesListsContainMainListName = state.lists.some(
//         (list) => list.listName === state.mainList
//       );
//       if (!doesListsContainMainListName)
//         state.mainList = state.lists[1].listName;
//     },
//     handleDeleteForm: (state, action) => {
//       state.showDeleteListForm = action.payload;
//     },
//     deleteList: (state) => {
//       if (state.activeListName === state.mainList)
//         state.mainList = state.lists[1].listName;

//       state.lists = state.lists.filter(
//         (list) => list.listName !== state.activeListName
//       );
//       state.activeListName = state.lists[0].listName;
//       state.lists[0].products = [];
//       state.lists.forEach((list) => {
//         if (list.listName === 'All products') return;
//         list.products.forEach((product) =>
//           state.lists[0].products.push(product)
//         );
//       });
//       state.showDeleteListForm = false;
//     },
//     addProduct: (state, action) => {
//       const timestamp = new Date().getTime();
//       let product = action.payload;
//       product.date = timestamp;

//       const currentMainList = state.lists.find(
//         (list) => list.listName === state.mainList
//       );
//       const isProductInMainList = currentMainList.products.some(
//         (product) => product.id === action.payload.id
//       );
//       if (!isProductInMainList) {
//         state.lists.map((list) => {
//           if (
//             list.listName === 'All products' ||
//             list.listName === state.mainList
//           ) {
//             list.products.push(product);
//           }
//         });
//       }
//     },
//     removeProduct: (state, action) => {
//       state.lists = state.lists.map((list) => {
//         if (
//           list.listName === 'All products' ||
//           list.listName === action.payload.listName
//         ) {
//           list.products = list.products.filter(
//             (product) => product.id !== action.payload.id
//           );
//         }

//         return list;
//       });
//     },
//     moveProduct: (state, action) => {
//       if (action.payload.listName === action.payload.moveTo) return;

//       state.lists = state.lists.map((list) => {
//         if (list.listName === action.payload.listName) {
//           list.products = list.products.filter(
//             (product) => product.id !== action.payload.id
//           );
//         }
//         if (list.listName === action.payload.moveTo) {
//           const isProductAlreadyIn = list.products.some(
//             (product) => product.id === action.payload.product.id
//           );
//           if (!isProductAlreadyIn) list.products.push(action.payload.product);
//         }

//         return list;
//       });
//     },
//   },
// });

// export default favoritesSlice.reducer;
// export const {
//   getLists,
//   addList,
//   handleActiveListName,
//   handleMainList,
//   handleAddListForm,
//   handleEditListForm,
//   editList,
//   handleDeleteForm,
//   deleteList,
//   handleSortProducts,
//   handleFilterProducts,
//   handleSearchProducts,
//   addProduct,
//   removeProduct,
//   moveProduct,
// } = favoritesSlice.actions;
