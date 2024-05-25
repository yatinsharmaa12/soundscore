import { PrismaClient } from "@prisma/client";
import { Router } from "express";

import { S3Client, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { fromEnv } from "@aws-sdk/credential-providers";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "..";
import { authMiddleware } from "../middleware";
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
const router = Router();

const prismaClient = new PrismaClient();

const s3Client = new S3Client({
  // credentials:{
  //   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  //   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  // }
  credentials: fromEnv(),
  region:"ap-south-1"
});





router.get("/presignedURL",authMiddleware, async (req, res) => {
  
  //@ts-ignore
  const userId  = req.userId;

  
// const command = new PutObjectCommand({
//   Bucket: "quecto",
//   Key: `/beats/${userId}/${Math.random()}/beats.mp3`,
//   //ContentType:
// });

const { url, fields } = await createPresignedPost(s3Client, {
  Bucket: 'quecto',
  Key: 'beats/${userId}/${Math.random()}/beats.mp3',
  Conditions: [
    ['content-length-range', 0, 5 * 1024 * 1024] // 5 MB max
  ],
  Fields: {
    // success_action_status: '201',
    // 'Content-Type': 'image/png'
  },
  Expires: 3600
})



console.log({url,fields});
res.json(
 { preSignedUrl:url}
)

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
        userId: hardcodeduseraddress,
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
        userId: user.id,
      },
      JWT_SECRET
    );

    res.json({
      token,
    });
  }
});

export default router;
