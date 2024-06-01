import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";
import { WORKER_JWT_SECRET } from "./config";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers["authorization"] ?? "";
  try {
    const decoded = jwt.verify(authHeader, JWT_SECRET);
    //@ts-ignore
    if (decoded.userId) {
        //@ts-ignore
        req.userId  = decoded.userId;
        return next();

    }
    else
    {
        return res.status(403).json({ message: "NOT Logged SOmetisda IN" });

    }

    next();
  } catch (err) {
    return res.status(403).json({ message: "NOT asdasd IN" });
  }
}


export function workerAuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers["authorization"] ?? "";
  try {
    const decoded = jwt.verify(authHeader, WORKER_JWT_SECRET);
    //@ts-ignore
    if (decoded.userId) {
        //@ts-ignore
        req.userId  = decoded.userId;
        return next();

    }
    else
    {
        return res.status(403).json({ message: "NOT Logged SOmetisda IN" });

    }

    next();
  } catch (err) {
    return res.status(403).json({ message: "NOT asdasd IN" });
  }
}
