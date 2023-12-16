
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import VendorCategory from './Pages/VendorCategory';
import { useState, useEffect } from 'react';
import Location from './Pages/Location';
import Vendor from './Pages/Vendor';
import Footer from './Components/Footer/Footer';
import axios from 'axios'
import { VendorContext } from './Contexts/VendorContext';

function App() {

  const [vendors, setVendors] = useState([])


  useEffect(() => {
    axios.get("http://localhost:8000/")
      .then(result => setVendors(result.data))
      .catch(err => console.log(err))
  }, [])
  console.log(vendors)

  return (
    <div>
      <VendorContext.Provider value={{vendors}}>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/veg' element={<VendorCategory category="veg" />}/>
        <Route path='/fruits' element={<VendorCategory category="fruits"/>}/>
        <Route path='/vendor' element={<Vendor/>}>
          <Route path=':vendorId' element={<Vendor/>}/>

        </Route>
        <Route path='/location' element={<Location />}>
              <Route path=':vendorId' element={<Location />}/>
        </Route> 
      </Routes>
      <Footer />
      </BrowserRouter>
      </VendorContext.Provider>
      </div>
  );
}

export default App;

