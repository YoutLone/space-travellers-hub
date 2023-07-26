import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  Missions: [],
  isLoading: true,
};

export const fetchMissions = createAsyncThunk('missions/getmissions', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch books');
  }
});
const missionSlice = createSlice({
  name: 'missionlist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.Missions = action.payload.map((mission) => ({
          mission_id: mission.mission_id,
          mission_name: mission.mission_name,
          description: mission.description,
          more_details: mission.wikipedia,
          joined: false,
        }));
      })
      .addCase(fetchMissions.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default missionSlice.reducer;
