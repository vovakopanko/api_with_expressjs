import express from "express";
import { userRouter } from "./users/users.js";

const port = 8000;
const app = express();

app.all("/hello", (req, res, next) => {
  console.log("Go to the next step => ...");
  next();
});

app.get("/hello", (req, res) => {
  // console.log("GET");
  // res.set("Content-Type", "text/plain");
  // res.set("Warning", "code");
  // res.cookie("token", "dsfsdfsd", {
  //   domain: "",
  //   path: "",
  //   secure: true,
  //   expire: 60000,
  // });
  // res.clearCookie("token");
  // res.type("application/json");
  res.send("Hello!");
  // res.redirect(301, 'https://dzen.ru/'); // redirect
});

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
