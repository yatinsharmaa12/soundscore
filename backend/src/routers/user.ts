import { PrismaClient } from "@prisma/client";
import { Router } from "express";

import { S3Client, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

import jwt from "jsonwebtoken";
import { JWT_SECRET } from "..";
const router = Router();

const prismaClient = new PrismaClient();


const s3Client = new S3Client();
const command = new PutObjectCommand({
  Bucket: "some-bucket",
  Key: "some-object",
});



router.get("/presignedURL", (req, res) => {
 
});

router.post("/signin", async (req, res) => {
  const hardcodeduseraddress = "GwmgDqZqkhUxAK828W3C1jwKp3AJ7LtFRUtZ3DCsjHNV";

  const existinguser = await prismaClient.user.findFirst({
    where: {
      address: hardcodeduseraddress,
    },
  });

  if (existinguser) {
    const token = jwt.sign(
      {
        userID: hardcodeduseraddress,
      },
      JWT_SECRET
    );

    res.json({
      token,
    });
  } else {
    const user = await prismaClient.user.create({
      data: {
        address: hardcodeduseraddress,
      },
    });
    const token = jwt.sign(
      {
        userID: user.id,
      },
      JWT_SECRET
    );

    res.json({
      token,
    });
  }
});

export default router;
