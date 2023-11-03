import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/home';
import Gallery from './components/displaydata';
import Counter from './components/counter';
import BucketList from './components/bucketlist';
import Game from './components/tictaktoe';
import Learnhooks from './hooks/Learnhooks';
// import Displaydd from './hooks/display';
import HookUse from './hooks/display';
import Counterr from './hooks/Reducer';

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/dd' element={<Gallery />}></Route>
          <Route path='/cc' element={<Counter />}></Route>
          <Route path='/bb' element={<BucketList />}></Route>
          <Route path='/game' element={<Game />}></Route>
          <Route path='/hooks' element={<Learnhooks />}></Route>
          <Route path='/usemsg' element={<HookUse/>}></Route>
          <Route path='/reducer' element={<Counterr />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
