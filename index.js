import express from "express";

const port = 8000;
const app = express();

app.all("/hello", (req, res, next) => {
  console.log("Go to the next step => ...");
  next();
});

const cb = (req, res, next) => {
  console.log(" step 2 ");
  next();
};

const cb2 = (req, res, next) => {
  console.log(" step 3 ");
  next();
};

// app.get("/hello", cb, (req, res) => {
//   console.log('GET')
//   res.send("Hello 1");
// });

// app.route('/user).get("/hello", cb, (req, res) => {
//   console.log('GET')
//   res.send("Hello 1")
//      .post("/hello", (req, res) => {
//   res.send(POST")
// })
// });

app.get("/hello", [
  cb,
  cb2,
  (req, res) => {
    console.log("GET");
    res.send("Hello 1");
  },
]);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
