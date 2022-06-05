import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './componetns/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import store from './Redux/store';


const App = () => {
  return (
    <>
    <Provider store={store} >
       <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
 
    </>
  )
}

export default App