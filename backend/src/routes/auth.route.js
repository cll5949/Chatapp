import express from 'express';
import { signin, signup } from '../controlers/auth.controller.js';

const router = express.Router();

router.get("/signin", signin);

router.get("/signup", signup); 

router.get("/signout", (req, res) => {
  res.send("Signout route");
}); 


export default router;