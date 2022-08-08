import React from 'react'
import { Router, Route } from 'react-router-dom'
//import { customHistory } from './stores'

import StockPicker from './components/StockPicker'
import NavBar from './components/NavBar'
import MagicEightBall from "./components/MagicEightBall"
import GameOfChance from './components/GameOfChance'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'

function App() {


  return (
    <div className="App">
      <NavBar />
      <StockPicker />
      {/* <MagicEightBall /> */}
      {/* <GameOfChance /> */}
      <UserProfile />
      <Footer />
    </div>
  );
}

export default App;
