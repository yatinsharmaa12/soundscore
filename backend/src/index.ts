import express from 'express';


import userRouter from "./routers/user"
import listenerRouter from "./routers/listener"
// scoundScore db :postgresql://soundscoreDB_owner:wCX3k6UdqcSM@ep-crimson-fog-a5dd6fxh.us-east-2.aws.neon.tech/soundscoreDB?sslmode=require
const app = express();
app.use("/v1/user",userRouter);
app.use("/v1/listner",listenerRouter);

app.listen(4000, () => {
  console.log("server is running on port 4000");
});


export const  JWT_SECRET = "HELLOHIBYE";