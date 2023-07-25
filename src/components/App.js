import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionSlice';
import NavBar from './NavBar';
import Rockets from './Rockets';
import Missions from './Missions';
import MyProfile from './MyProfile';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
