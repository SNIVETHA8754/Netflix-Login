const express = require("express");
const cors = require ("cors");
const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  credentials: true,
}));

//Dummy login
const email = "0987654321";
const pass = "123";

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Login route
app.post("/loginpage", async (req, res) => {
  try{
    const { email: inputEmail, password} = req.body;
  console.log("Login attempt from Email:", inputEmail);

  if (inputEmail === email && password === pass) {
    return res.send(true); //Login Successful
  }
  else{
    return res.send(false);//Login Failed
  }

}
catch (err){
  console.error(`Error in Login - ${err.message}`);
  return res.status(500).json({
    message: 'Internal Server Error',
    error: err.message,
    success: false
  });
}
});

app.listen(3000, function () {
  console.log("Server Started...");
});