import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./components/Home";
import Product from "./components/Product";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="/not-found" element={<NotFound/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
