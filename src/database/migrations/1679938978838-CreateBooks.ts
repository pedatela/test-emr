import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateBooks1679938986065 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
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
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("books")
  }

}
