import './scss/app.scss';
import React from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
//import { Outlet } from 'react-router-dom';

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <div className='wrapper'>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className='content'>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home searchValue={searchValue} />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>

          {/* <Outlet /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
