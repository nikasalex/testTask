import { DataSource } from 'typeorm';
import path from 'path'


const x = path.join( __dirname, 'entity', '*.{js,ts}' )




const DB_TYPE: any = process.env.DB_TYPE || 'mysql';

export const AppDataSource = new DataSource({
  type: DB_TYPE,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT) as number,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [x],
  synchronize: true,
});
