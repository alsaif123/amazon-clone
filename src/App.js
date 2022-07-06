import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import CheckOut from './components/CheckOut/CheckOut';

function App() {
  return (
    <>
       <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
           
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<CheckOut/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
