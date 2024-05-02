import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Error from './components/Error';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Userlist from './components/Userlist';
import Update from './components/Updateuser';

function App() {
  return (
    <div className="App">

    <BrowserRouter>

      <Navbar/>

      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/users-list' element={<Userlist/>}/>
          {/* <Route path='*' element={<Error/>}/> */}
          <Route path='/update-user/:id' element={<Update/>}/>
          
      </Routes>
    
    </BrowserRouter>


    </div>
  );
}

export default App;
