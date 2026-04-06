import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { envs } from '../config/envs.ts';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: envs.DB_HOST,
  port: envs.DB_PORT,
  username: envs.DB_USERNAME,
  password: envs.DB_PASSWORD,
  database: envs.DB_DATABASE,
  entities: ['./src/modules/**/**/*.entity{.ts,.js}'],
  synchronize: false,
  logging: true,
  migrations: ['./src/database/migrations/**/*{.ts,.js}'],
});
