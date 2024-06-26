import express from 'express';
import cors from 'cors';

import userRouter from "./routers/user"
import listenerRouter from "./routers/listener"
import testingRouter from "./routers/testing"
// scoundScore db :postgresql://soundscoreDB_owner:wCX3k6UdqcSM@ep-crimson-fog-a5dd6fxh.us-east-2.aws.neon.tech/soundscoreDB?sslmode=require
const app = express();
app.use(cors());
app.use(express.json());
app.use("/v1/user",userRouter);
app.use("/v1/listner",listenerRouter);
app.use("/v1/testing",testingRouter);

app.listen(4000, () => {
  console.log("server is running on port 4000");
});


