import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('genders')
export class GenderEntity {

  @PrimaryColumn()
  id?: string;


  @Column()
  name: string;
}