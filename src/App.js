import './App.css';
import Footer from './Component/Footer';
import NavBar from './Component/NavBar';
import './index.css';
import { BrowserRouter , Route, Routes,} from 'react-router-dom';
import Home from './Component/Home';
import AddYourRestaurant from './Component/AddYourRestaurant';
import ScrollToTop from './Component/ScrollToTop';

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <NavBar />
          <Routes>
          <Route path="/" element={<Home/>} />
          
          <Route path="/Add-Your-Restaurant" element={<AddYourRestaurant/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
