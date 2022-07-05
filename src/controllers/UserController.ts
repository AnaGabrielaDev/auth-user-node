import { Request, Response } from "express";
import { connection } from "../database/connection";
import { hash } from 'bcrypt';

class UserController {
    async create(req: Request, res: Response) {
        const { name, email, password } = req.body;
        const hashPassword = await hash(password, 12);

        const user = await connection.user.create({
            data: {
                name,
                email,
                password: hashPassword
            }
        });

        return res.json(user);
    }
}

export { UserController }