import { configureStore } from '@reduxjs/toolkit';

import RocketsSlice from './Rockets/RocketsSlice';

const store = configureStore({
  reducer: {
    rockets: RocketsSlice,
  },
});

export default store;
