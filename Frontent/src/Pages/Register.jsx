import React, { useContext, useState } from "react";
import { data, Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalProvider";
import axios from "axios";

const Register = () => {
  const { Datas, setDatas } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // SUCCESS MESSAGE STORE :
  const[success,setSuccess]=useState("")
  const[error,seterror]=useState("")
  const navigate = useNavigate();

  function handleemail(e) {
    setEmail(e.target.value);
  }

  function handlepassword(e) {
    setPassword(e.target.value);
  }

  async function handleregister(e) {
    e.preventDefault();

    const newuser = {
      email,
      password,
    };
    console.log("REGISTER BUTTON CLICKED", { email, password });
    // setDatas((Pre) => [...Pre, newuser]);
    // console.log(Datas);
    // axios
    //   .post("http://localhost:5000/register", newuser)
    //   .then((res) => res.data)
    //   .then((data) => {
    //     if (data.message === "User already exist") {
    //       alert("User already exist");
    //     } else {
    //       navigate("/");
    //     }
    //     console

    //   });
    // const res=await axios.post(" http://localhost:5000/register",newuser);
    // console.log(res)

    try {
      const res = await axios.post(" http://localhost:5000/register", newuser);
      console.log("Responce from Server", res);
      if(res.status===200){
        setSuccess(res.data.message);
        seterror("")
        alert("User created successfully")
      }
    } catch (error) {
      console.log("Responce from error", error);
      seterror(error.response.data.message)
    }

    // navigate("/");
  }
  return (
    <div>
      <h1>Register COMPONENT'S</h1>
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
        {error && <p style={{color:'red'}}>{error}</p>}
        {success && <p style={{color:'green'}}>{success}</p>}
        <button
          style={{
            backgroundColor: "yellow",
            color: "red",
            outline: "none",
            padding: "10px 30px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          type="submit"
          onClick={handleregister}
        >
          Register
        </button>
        <Link
          type="button"
          style={{
            backgroundColor: "blue",
            color: "white",
            outline: "none",
            padding: "10px 30px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          to="/"
        >
          Login
        </Link>
      </form>
    </div>
  );
};

export default Register;
