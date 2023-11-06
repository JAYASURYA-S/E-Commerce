import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import About from "./components/About";
import Contact from "./components/Contact";
import Checkout from "./components/Checkout";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [username, setUsername] = useState("");
  const [loginid,setloginId] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const [error, setError] = useState({});

  const logoutsubmit = () =>{
    setLoggedIn(false)
    navigate('/')
  }

  const loginSubmit = (e) => {
    e.preventDefault();
    setError(validate(user));
    const checkData = JSON.parse(localStorage.getItem("user")) || [];
    const isDetailsExist = checkData.find((data) => {
      return data.email === user.email && data.password === user.password;
    });
    
    if (isDetailsExist) {
      setLoggedIn(true);
      setUsername(isDetailsExist.username);
      setloginId(isDetailsExist.id)
      navigate(`/profile/${isDetailsExist.id}`);
    }
    
  };

  const validate = (user) => {
    let error = {};
    const checkData = JSON.parse(localStorage.getItem("user")) || [];

    const emailCheck = checkData.some((data) => {
      return data.email === user.email;
    });

    const passwordCheck = checkData.some((data) => {
      return data.email === user.email && data.password === user.password;
    });
    if (!user.email.trim()) {
      error.email = "Email is Required";
    } else if (!emailCheck) {
      error.email = "Invalid Email";
    }

    if (!user.password.trim()) {
      error.password = "Password is Required";
    } else if (user.password.length < 8) {
      error.password = "Password needs to be 8 or more characters";
    } else if (!passwordCheck) {
      error.password = "Invalid Credentials";
    }

    return error;
  };
  return (
    <>
      <Navbar loggedIn = {loggedIn} username = {username} loginid={loginid} logoutsubmit={logoutsubmit}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<ProductPage />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/login" element={<Login 
        user = {user}
        setUser = {setUser}
        error = {error}
        setError = {setError}
        loginSubmit = {loginSubmit}
        loggedIn = {loggedIn}
        setLoggedIn = {setLoggedIn}
        validate = {validate(user)}
        />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/profile/:id" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
