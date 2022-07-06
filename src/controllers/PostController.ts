import { Request, Response } from "express";
import { connection } from "../database/connection";

class PostController {
    async create(req: Request, res: Response) {
        const { id } = req.user;
        const { name, description, image } = req.body;

        const post = await connection.post.create({
            data: {
                name,
                description,
                image,
                userId: id
            }
        })

        return res.status(201).json(post)
    }

    async index(req: Request, res: Response) {
        const posts = await connection.post.findMany({
            include: {
                owner: true
            }
        });

        return res.status(200).json(posts);
    }
}

export { PostController }