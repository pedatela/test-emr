
import { AuthorEntity } from "../authors/author.entity";
import { BookEntity } from "../books/book.entity";
import { CategoryEntity } from "../categories/category.entity";
import { GenderEntity } from "../genders/gender.entity";
import 'dotenv/config';

import { DataSource, DataSourceOptions } from "typeorm";
export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [AuthorEntity, BookEntity, GenderEntity, CategoryEntity],
  migrations: [__dirname + '/migrations/*.{js,ts}'],
  synchronize: true,
  logging: true,
}
const dataSource = new DataSource(dataSourceOptions)
export default dataSource