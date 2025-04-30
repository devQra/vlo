import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: '192.168.10.122',
  port: 5432,
  username: 'pg',
  password: '1234',
  database: 'postgres',
  synchronize: true,
  logging: true,
  entities: ['src/entity/*.ts'],
});
