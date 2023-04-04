import { AppDataSource } from "../data_source";
import { Comment } from "../entity/Comment";

export const commentRepository = AppDataSource.getRepository(Comment).extend({
    findById(id: number){
        return this.findOneBy({
            id
        })
    },

    getAll(){
        return this.find({
            select:{
                replies:{
                    id: true,
                    userName: true,
                    email: true,
                    text: true,
                    date: true
                }
            },
            relations: {
                replies: true,
            },
            
        })
    }

})
