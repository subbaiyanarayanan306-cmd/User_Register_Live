import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalProvider";

const Login = () => {
  const { Datas } = useContext(GlobalContext);
  const [error, setError] = useState("Subbu");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleemail(e) {
    setEmail(e.target.value);
  }

  function handlepassword(e) {
    setPassword(e.target.value);
  }

  function hadlelogin(e) {
    e.preventDefault();
    console.log("LOGIN BUTTON CLICKED", { email, password });

    const newuser = {
      email,
      password,
    };
    const userInfo = Datas.find((data) => data.email === email);

    if (!userInfo) {
      setError("User not found");
      return;
    }

    if (userInfo.password !== password) {
      setError("Password is incorrect");
      return;
    }

    setError("");
    alert("LOGIN SUCCESSFULLY...");
  }
  return (
    <div>
      <h1>LOGIN COMPONENT'S</h1>
      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxWidth: "80%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {error ? (
          <p style={{ color: "red", fontSize: "20px", fontWeight: "bold" }}>
            {error}
          </p>
        ) : (
          ""
        )}
        <input
          value={email}
          onChange={handleemail}
          type="email"
          placeholder="Entyer your email"
        />
        <input
          value={password}
          onChange={handlepassword}
          type="password"
          placeholder="Entyer your password"
        />
        <button    style={{
            backgroundColor: "red",
            color: "yellow",
            outline: "none",
            padding: "10px 30px",
            borderRadius: "10px",
            cursor:'pointer'
          }} onClick={hadlelogin} type="submit">
          Login
        </button>
        <Link
          type="button"
          style={{
            backgroundColor: "blue",
            color: "white",
            outline: "none",
            padding: "10px 30px",
            borderRadius: "10px",
          }}
          to="/register"
        >
          Register
        </Link>
      </form>
    </div>
  );
};

export default Login;
