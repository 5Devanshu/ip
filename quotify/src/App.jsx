import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from "./Component/Navbar";
import { Page1 } from "./Component/Page1";
import { Page2 } from "./Component/Page2";
import { Login } from './Component/Login';
import { Register } from './Component/Register';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/generate" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

