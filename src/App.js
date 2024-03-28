
import { useEffect } from 'react';
import {BrowserRouter as Router,Routes,Route,useLocation} from 'react-router-dom'
import About from './pages/About';
import AllPackages from './pages/AllPackages';
import Home from './pages/Home';
import PackageDetail from './pages/PackageDetail';
import Packages from './pages/Packages';
import Services from './pages/Services';

function App() {
 
 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/packages/:place' element={<Packages/>} />
          <Route path='/package_details' element={<PackageDetail/>}  />
          <Route path='/about' element={<About/>}/>
          <Route path='/allPackages' element={<AllPackages/>} />
          <Route path='/service' element={<Services/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
