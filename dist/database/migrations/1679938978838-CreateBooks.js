"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBooks1679938986065 = void 0;
const typeorm_1 = require("typeorm");
class CreateBooks1679938986065 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "books",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "price",
                    type: "float",
                },
                {
                    name: "author_id",
                    type: "uuid",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                }
            ],
            foreignKeys: [
                {
                    name: "FKAuthorBooks",
                    referencedTableName: "authors",
                    referencedColumnNames: ["id"],
                    columnNames: ["author_id"],
                    onDelete: "cascade",
                    onUpdate: "cascade"
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("books");
    }
}
exports.CreateBooks1679938986065 = CreateBooks1679938986065;
//# sourceMappingURL=1679938978838-CreateBooks.js.map