import express from "express";

const userRouter = express.Router();

userRouter.get("/login", (req, res) => {
  res.send("<h1>login!</h1>");
});

userRouter.post("/registr", (req, res) => {
  res.send("<h1>Regist!</h1>");
});

export { userRouter };
