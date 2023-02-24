import React from 'react';
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './Pages/Layout';
import Footer from "./Pages/Footer";
import Contact from './Pages/Contact';
import Food from './Pages/Food'
import AboutUs from './Pages/AboutUs';
import Ardian from './Pages/Ardian';
import Lazar from './Pages/Lazar';
import Shaun from './Pages/Shaun';
import WeightLoss from './Pages/WeightLoss';
import WeightGain from './Pages/WeightGain';
import Workouts from './Pages/Workouts';
import Shop from './Pages/Shop';
import Biceps from './Pages/Biceps';



function App() {
  return (
<>

  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Homepage/>}/>
      <Route path='food' element={<Food/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='aboutus' element={<AboutUs/>}/>
      <Route path='ardian' element={<Ardian/>}/>
      <Route path='lazar' element={<Lazar/>}/>
      <Route path='shaun' element={<Shaun/>}/>
      <Route path='weightloss' element={<WeightLoss/>}/>
      <Route path='weightgain' element={<WeightGain/>}/>
      <Route path='workouts' element={<Workouts/>}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='biceps' element={<Biceps/>}/>


      {/* <Route path='*' element={<NoPage/>}/> */}

    </Route>
  </Routes>
  </BrowserRouter>


    <Footer />


  </>

  );
}

export default App;
