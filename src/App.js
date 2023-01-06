
import './App.css';
import Body from './components/Body';
import NavbarComp from './components/NavbarComp';
import axios from "axios"
import ScrollBar from './components/ScrollBar';
import Container from 'react-bootstrap/Container';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Homepage from './pages/Homepage';
import AnimePage from './pages/AnimePage';
import GenrePage from './components/GenrePage';
import TypesPage from './pages/TypesPage';


function App() {
  
  return (


    <Container className="m-5 mt-5">
     <NavbarComp/>
      <Router>
        <Routes>
          <Route  path='/' element={<Homepage/>}></Route>
          <Route path='/anime/:id' element={<AnimePage/>}> </Route>
          <Route path='/genres/:id' element={<GenrePage/>}></Route>
          <Route path='/types/:id' element={<TypesPage/>}></Route>
        </Routes>
      </Router>
        
    </Container>
  );
}

export default App;
