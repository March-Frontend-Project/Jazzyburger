
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './Pages/Checkout';
import Address from './Pages/Address';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
                <Route path='/address' element={<Address/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
            </Routes>
        </BrowserRouter>
        
      </div>
    
  );
}

export default App;
