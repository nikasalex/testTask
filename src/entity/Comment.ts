import { Entity , PrimaryGeneratedColumn, JoinTable, Column, OneToMany, CreateDateColumn} from "typeorm";
import { Reply } from "./Reply";
@Entity()
export class Comment {
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

@OneToMany(()=> Reply, (reply) => reply.comment)
replies: Reply[]

}