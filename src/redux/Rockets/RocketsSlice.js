import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  Rockets: [],
  isLoading: true,
};

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw Error('Error fetching rockets');
    }
  },
);

const RocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.Rockets = action.payload.map((rocket) => ({
          id: rocket.id,
          name: rocket.name,
          description: rocket.description,
          flickr_images: rocket.flickr_images,
        }));
      })
      .addCase(fetchRockets.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default RocketsSlice.reducer;
