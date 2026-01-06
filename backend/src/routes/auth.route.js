import express from 'express';

const router = express.Router();

router.get("/signin", (req, res) => {
  res.send("Signin route");
});

router.get("/signup", (req, res) => {
  res.send("Signup route");
}); 

router.get("/signout", (req, res) => {
  res.send("Signout route");
}); 


export default router;