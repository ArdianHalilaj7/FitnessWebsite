import React from 'react';
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './Pages/Layout';

function App() {
  return (
<>

  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Homepage/>}/>
      <Route path='login' element={<Login/>}/>


      {/* <Route path='*' element={<NoPage/>}/> */}

    </Route>
  </Routes>
  </BrowserRouter>

  </>

  );
}

export default App;
