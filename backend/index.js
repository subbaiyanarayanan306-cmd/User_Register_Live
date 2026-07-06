const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

const users = [];

//CREATE THE USER VIA BACKEND SO USING CRUD OPEARTION CREATE-C, READ-R , UPDATE - U , DELETE - D REST-API USIG HERE
app.post("/register", (req, res) => {
  const { email, password } = req.body;
  console.log("Registered api is calling", { email, password });
  // const Userexit = users.find((user) => user.email === email);

  // if (Userexit) {
  //   return res.status(400).json({
  //     message: "User Already Exists",
  //   });
  // }

  // to put the daata inside the one object to show the result very easyley :

  // const newuser = {
  //   email,
  //   password,
  // };
  // here to push the data
  // users.push(newuser);

  //   res.send({ email, password });
  // res.status(200).json({
  //   message: "User Registered Successfully",
  //   totaluser: users.length,
  // });

  const userexist = users.find((user) => user.email === email);

  if (userexist) {
    return res.status(400).json({
      message: "User already exist",
    });
  }

  const newusers = {
    email,
    password,
  };
  users.push(newusers);

  res.status(200).json({
    message: "User created successfullt",
    totaluser: users.length,
  });
});

app.get("/", function (req, res) {
  console.log("GET FUNCTION IS CALLING");
  res.send("RESPONCE ARE THERE All how are you ..");
});

app.listen(port, () => {
  console.log(`Server is Running on http://localhost:${port}`);
});
