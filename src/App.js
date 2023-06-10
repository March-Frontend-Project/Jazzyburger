import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CheckOut from './Components/CheckOut';
import Update from './Components/Update';
import './Components/Update.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/update' element={<Update/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>

      </Routes>
      </BrowserRouter>
      

      
    </div>
  );
}

export default App;
