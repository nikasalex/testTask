import { NextFunction, Request, Response } from "express";
import { replyRepository, commentRepository } from "../../repository";
import { log } from "console";



export class Comments {

async sendComment(req:Request, res:Response, next: NextFunction){
    try{
    
    const {userName, email, text} = req.body
    await commentRepository.save({
        userName,
        email,
        text
    })

    return res.json({message: "Comment sent"})
    }
    catch(e){
        console.log(e)
        return res.status(500).json({messsage: "Error with server"})
    }

}


async sendReply(req:Request, res:Response){
    try{
    const commentId = req.params.commentId
    const {userName, email, text } = req.body

    const comment = await commentRepository.findById(+commentId)
    await replyRepository.save({
        userName,
        email,
        text,
        comment
    })

    return res.json({message: "Reply sent"})
    }
    catch(e){
        console.log(e)
        return res.status(500).json({messsage: "Error with server"})
    }

}
async getCommentsWithReplies(req: Request, res:Response){
    try{
        const comments = await commentRepository.getAll()
        res.json(comments)
    }
    catch(e){
        console.log(e)
        return res.status(500).json({messsage: "Error with server"})
    }
}

}