import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import SingleCocktail from './Pages/SingleCocktail';
import Error from './Pages/Error';

function App() {
  return (
    <>
    <Navbar />
    
    </>
    // <Router >
    // <p>hii</p>
    // //   <Navbar />
    // //   <Routes>
    // //     <Route path='/' element={<Home />}/>
    // //     <Route path='about' element={<About />} />
    // //     <Route path='cocktail/:id' element={<SingleCocktail />} />
    // //     <Route path='*' element={<Error />} />
    // //   </Routes>
    //  </Router>
  );
}

export default App;
