import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const router = Router();
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";
import { workerAuthMiddleware } from "../middleware";
import { textSpanContainsTextSpan } from "typescript";
const prismaClient = new PrismaClient();

import { WORKER_JWT_SECRET } from "../config";
import { getNextTask } from "../db";
import { createSubmissionInput } from "../types";

const TOTAL_SUBMISSION = 100;
const TOTAL_DECIMALS = 1000_000;

router.post("/submission", workerAuthMiddleware, async (req, res) => {
  //@ts-ignore
  const userId = req.userId;
  const body = req.body;
  const parsedBody = createSubmissionInput.safeParse(body);

  if (parsedBody.success) {
    const task = await getNextTask(Number(userId));
    if (!task || task?.id !== Number(parsedBody.data.taskId)) {
      return res.status(411).json({ message: "Incorrect task id" });
    }
    const amount = (Number(task.amount) / TOTAL_SUBMISSION);

    const submission = await prismaClient.$transaction(async tx =>{

      const submission = await tx.submission.create({
        data: {
          option_id: Number(parsedBody.data.selection),
          listner_id: userId,
          task_id: Number(parsedBody.data.taskId),
          amount,
        },
      });

      await tx.listner.update({
        where: {
          id: userId,
        },
        data: {
          pending_amount:{
            increment: Number(amount)
          }
          
        },
      })

      return submission;
    })

  

    const nextTask = await getNextTask(Number(userId));
    res.json({
      nextTask,
      amount,
    });
    
  }
});

router.get("/nextTask", workerAuthMiddleware, async (req, res) => {
  //@ts-ignore
  const userId = req.userId;

  const task = await getNextTask(Number(userId));

  if (!task) {
    res.status(411).json({ message: " No Tasks not available" });
  } else {
    res.status(200).json({ task });
  }
});

router.post("/signin", async (req, res) => {
  const hardcodeduseraddress = "GwmgDqZqkhUxAK828W3C1jwKp3AJ7LtFRUtZ3DCsjHNV";

  const existinguser = await prismaClient.listner.findFirst({
    where: {
      address: hardcodeduseraddress,
    },
  });

  if (existinguser) {
    const token = jwt.sign(
      {
        userId: existinguser.id,
      },
      WORKER_JWT_SECRET
    );

    res.json({
      token,
    });
  } else {
    const user = await prismaClient.listner.create({
      data: {
        address: hardcodeduseraddress,
        pending_amount: 0,
        locked_amount: 0,
      },
    });
    const token = jwt.sign(
      {
        userId: user.id,
      },
      WORKER_JWT_SECRET
    );

    res.json({
      token,
    });
  }
});
export default router;
