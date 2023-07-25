import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Missions: [],
  isLoading: true,
};

const missionSlice = createSlice({
  name: 'missionlist',
  initialState,
  reducers: {},
});

export default missionSlice.reducer;
