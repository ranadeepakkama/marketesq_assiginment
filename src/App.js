import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BookingPage from './components/Booking Page';
import OrderPage from './components/Order Page';

const App = () => (
  <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='Booking/' element={<BookingPage/>}/>
      <Route path='/order' element={<OrderPage/>}/>
    </Routes>
  </div>
)

export default App