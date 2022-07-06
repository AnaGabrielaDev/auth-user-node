import { NextFunction, Request, Response } from "express";
import jsonwebtoken from 'jsonwebtoken';

function verifyAuth(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'] as string;

    if (!authHeader) return res.status(401).json({ message: "Token is required" });
    const [, token] = authHeader.split("Bearer ");

    const user = jsonwebtoken.verify(token, process.env.JWT_SECRET!);
    req.user = user;

    return next();
}

export { verifyAuth }