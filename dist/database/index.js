"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOptions = void 0;
const author_entity_1 = require("../authors/author.entity");
const book_entity_1 = require("../books/book.entity");
const category_entity_1 = require("../categories/category.entity");
const gender_entity_1 = require("../genders/gender.entity");
require("dotenv/config");
const typeorm_1 = require("typeorm");
exports.dataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [author_entity_1.AuthorEntity, book_entity_1.BookEntity, gender_entity_1.GenderEntity, category_entity_1.CategoryEntity],
    migrations: [__dirname + '/migrations/*.{js,ts}'],
    synchronize: true,
    logging: true,
};
const dataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
exports.default = dataSource;
//# sourceMappingURL=index.js.map