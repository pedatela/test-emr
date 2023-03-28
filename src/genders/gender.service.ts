import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { GenderEntity } from "./gender.entity";

@Injectable()
export class GenderService {
  constructor(
    @InjectRepository(GenderEntity)
    private genderRepository: Repository<GenderEntity>,
  ) { }

  public getAllGenders() {
    return this.genderRepository.find();
  }

  public createGender(gender: GenderEntity): GenderEntity {
    const createdGender = this.genderRepository.create(gender);
    this.genderRepository.save(createdGender);
    return createdGender;
  }
}
