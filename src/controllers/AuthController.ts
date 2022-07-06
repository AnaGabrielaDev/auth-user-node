import { compare } from "bcrypt";
import { Request, Response } from "express";
import { connection } from "../database/connection";
import jsonwebtoken from 'jsonwebtoken';

class AuthController {
    async signIn(req: Request, res: Response) {
        const { email, password } = req.body;

        const user = await connection.user.findFirst({
            where: {
                email
            }
        });

        if (!user) return res.status(401).json({
            message: "Not authorized"
        });

        const correctPassword = await compare(password, user.password);

        if (!correctPassword) return res.status(401).json({
            message: "Not authorized"
        });

        const token = jsonwebtoken.sign(
            { id: user.id, name: user.name, email },
            process.env.JWT_SECRET!
        );

        return res.status(200).json({
            "access_token": token
        });
    }
}

export { AuthController }