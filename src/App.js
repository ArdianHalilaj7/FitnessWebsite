import React from 'react';
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './Pages/Layout';
import Footer from "./Pages/Footer";


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

  <div className="page-container">
      <div className="content-wrap">
      </div>
      <Footer />
    </div>

  </>

  );
}

export default App;
