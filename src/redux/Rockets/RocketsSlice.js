import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 'item1',
    name: 'Falcon 1',
    type: 'rocket',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    flickr_images: ['https://imgur.com/DaCfMsj.jpg', 'https://imgur.com/azYafd8.jpg'],
  },
  {
    id: 'item2',
    name: 'Falcon 2',
    type: 'rocket',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    flickr_images: ['https://imgur.com/DaCfMsj.jpg', 'https://imgur.com/azYafd8.jpg'],
  },
  {
    id: 'item3',
    name: 'Falcon 3',
    type: 'rocket',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    flickr_images: ['https://imgur.com/DaCfMsj.jpg', 'https://imgur.com/azYafd8.jpg'],
  },
];

const RocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
});

export default RocketsSlice.reducer;