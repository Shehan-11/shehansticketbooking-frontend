import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import Tickets from './pages/Tickets';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/tickets" element={<Tickets/>}/>
      </Routes>
    </Router>
  </div>;     
}
export default App;