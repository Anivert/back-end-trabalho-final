const express = require("express");
const bodyParser = require("./routes/userRouter");
const userRouter = require("./routes/userRouter");
const postRouter = require("./routes/postRouter");
//const router = require("./routes/userRouter");
const workRouter = require("./routes/workRouter");
const app = express();
const port = 3000;

app.use(express.json());
app.use("/api", userRouter);
app.use("/api/postas", postRouter);
app.use("/api/work", workRouter);

app.listen(port, () => {
  console.log("executei minha express # acessa com sucesso ");
});
