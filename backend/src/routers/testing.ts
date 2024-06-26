import { Router } from "express";

const router = Router();

router.get("/testing", async (req, res) => {

  res.json({
    user: "tested"
  })


})


export default router;