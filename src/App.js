import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from 'react-router-dom';
//pages
import Header from './pages/Header'
import Home from './pages/Home';
import Footer from './pages/Footer';
import NoPage from './pages/NoPage';

function App() {
  return (
    <div className="App">
    {/* Header */}
    <Header/>
     <Routes>
      <Route path='/coursify-front-end/' exact element={<Home/>} />
      <Route path='*'  element={<NoPage/>} />

     </Routes>
     <Footer />
    </div>
  );
}

export default App;
