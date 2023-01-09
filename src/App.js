import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Invalid from './pages/Invalid'
import Nav from "./Components/nav/Nav"
import {ContextProvider} from  "./utilities/ContextApi"

function App() {
  return (
    <ContextProvider>
    <div className="App">
<BrowserRouter>
<Nav/>           
      <Routes>
        <Route path= "/" element={<Home/>} />
        <Route path = "/cart" element={ <Cart/> } />
        <Route path="*" element={<Invalid/>} />
      </Routes>
      </BrowserRouter>
    </div>
    </ContextProvider>
    
  );
}

export default App;
