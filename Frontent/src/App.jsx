import React from "react";
import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Register from "./Pages/Register";
import { GlobalProvider } from "./context/GlobalProvider";

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <nav>
          <Link to="/">Loginn</Link>
          <Link to="/register">Register</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
