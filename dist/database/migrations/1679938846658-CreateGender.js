"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGender1679938846658 = void 0;
const typeorm_1 = require("typeorm");
class CreateGender1679938846658 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "genders",
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
        await queryRunner.dropTable("genders");
    }
}
exports.CreateGender1679938846658 = CreateGender1679938846658;
//# sourceMappingURL=1679938846658-CreateGender.js.map