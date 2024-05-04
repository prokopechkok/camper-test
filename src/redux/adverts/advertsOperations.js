import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66329032c51e14d69564d035.mockapi.io';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/adverts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const addAdvert = createAsyncThunk(
//   'adverts/addAdvert',
//   async (advert, thunkAPI) => {
//     try {
//       const { data } = await axios.post('/adverts', advert);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteAdvert = createAsyncThunk(
//   'adverts/deleteAdvert',
//   async (advertId, thunkAPI) => {
//     try {
//       const { data } = await axios.delete(`/adverts/${advertId}`);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
