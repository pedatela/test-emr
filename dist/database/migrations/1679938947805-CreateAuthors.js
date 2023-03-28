"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAuthors1679938947805 = void 0;
const typeorm_1 = require("typeorm");
class CreateAuthors1679938947805 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "authors",
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
                    name: "gender_id",
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
                    name: "FKAuthorGender",
                    referencedTableName: "genders",
                    referencedColumnNames: ["id"],
                    columnNames: ["gender_id"],
                    onDelete: "cascade",
                    onUpdate: "cascade"
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("authors");
    }
}
exports.CreateAuthors1679938947805 = CreateAuthors1679938947805;
//# sourceMappingURL=1679938947805-CreateAuthors.js.map