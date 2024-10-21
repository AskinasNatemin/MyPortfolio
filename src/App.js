import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

/* import components start*/
import Portfolio_Profile from './Components/Portfolio_Profile';
import Portfolio_Skills from './Components/Portfolio_Skills';
import Portfolio_Project from './Components/Portfolio_Project';
/* import components end*/



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Portfolio_Profile/>}/>
      <Route path='PortfolioSkills' element={<Portfolio_Skills/>}/>
      <Route path='PortfolioProjects' element={<Portfolio_Project/>}/>
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
