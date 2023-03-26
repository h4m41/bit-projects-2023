import { Route, Routes, Link } from "react-router-dom"

import './App.css';
// import Buttons from './buttons/buttons';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from "./pages/About";

function App() {
  return (
    
    <div>
      <Navbar/>
      
      {/* <nav  className=' flex flex-column justify-center space-x-5 bg-neutral-800 text-1xl text-white'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
          </nav> */}
    {/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path ="/about" element={<About/>}>
        <Route index element={''} />
        <Route path=":id" element={''} />
        <Route path="*" element={''} />

      </Route> */}
      {/* <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:id" element={<Article />} />
      <Route path="*" element={<NotFound/>} /> */}
    {/* </Routes> */}
    </div>
  );
}

export default App;
