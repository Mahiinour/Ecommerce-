import './App.css';
import { Fragment } from 'react';
import { Route,Routes } from 'react-router-dom';
import Navibar from './Routing/Navibar';
import Home from './Components/Home'
import WomenComponent from './Components/WomenComponent';
import ProductDetailedPage from './Routing/ProductDetailedPage';
// import SizeChart from './Components/SizeChart';



function App() {
  return (
    <Fragment>
      {/* <h1>Helloo</h1> */}
      <Navibar/>
      {/* <SizeChart/> */}
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/products' element={<Home/>}/>
        <Route path='/women' element={<WomenComponent/>} />
        <Route path='/:x' element={<ProductDetailedPage/>}/>
        <Route path='/products/:x' element={<ProductDetailedPage/>}/>
      </Routes>
      {/* <Home/> */}
    </Fragment>
  );
}

export default App;
