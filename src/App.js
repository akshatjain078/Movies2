
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import Favourites from './components/Favourites';
import {BrowserRouter,Routes,Route}from 'react-router-dom'
function App() {
  return (
    <>
     <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<><Banner/><MovieList/></>}/>
        <Route path="/Favourites" element={<Favourites/>}/>
      </Routes>
      </BrowserRouter>
    </>

    
  );
}

export default App;
