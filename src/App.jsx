import './App.css';
import Navbar from './components/navbar/Navbar';
import Deals from './pages/Deals';
import Footer from './components/footer/Footer';
import {Navigate, Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="app__container">
        <Routes>
          <Route path="/" element={<Navigate to="/deals"/>}/>
          <Route path="/deals" element={<Deals/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
