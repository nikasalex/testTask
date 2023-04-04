import { Entity , PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn} from "typeorm";
import { Comment } from "./Comment";
@Entity()
export class Reply {
@PrimaryGeneratedColumn()
id: number

@Column()
email: string

@Column()
userName: string

@Column()
text: string

@CreateDateColumn()
date: Date

@ManyToOne(()=> Comment, (comment)=> comment.replies)
comment: Comment

}