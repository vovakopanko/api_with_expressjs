import express from "express";

const userRouter = express.Router();

userRouter.use((req, res, next) => {
  console.log("Handler users: ", new Date());
  next();
});

userRouter.get("/login", (req, res) => {
  res.send("<h1>login!</h1>");
});

userRouter.post("/registr", (req, res) => {
  res.send("<h1>Regist!</h1>");
});

export { userRouter };
