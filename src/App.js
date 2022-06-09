import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Message from './components/Pages/Message/Message';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
