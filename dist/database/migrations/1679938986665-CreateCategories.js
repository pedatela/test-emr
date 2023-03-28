"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategories1679938978838 = void 0;
const typeorm_1 = require("typeorm");
class CreateCategories1679938978838 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "categories",
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
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("categories");
    }
}
exports.CreateCategories1679938978838 = CreateCategories1679938978838;
//# sourceMappingURL=1679938986665-CreateCategories.js.map