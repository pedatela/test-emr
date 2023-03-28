import { Body, Controller, Get, Post, Param, Delete, Put } from '@nestjs/common';

import { GenderService } from './gender.service'
import { CreateGenderDTO } from './dtos/CreateGender.dto';
import { GenderEntity } from './gender.entity';

@Controller('genders')
export class GenderController {
  constructor(private readonly genderService: GenderService) { }

  @Get()
  public getAllGenders() {
    return this.genderService.getAllGenders()
  }

  @Post()
  public createGender(@Body() gender: CreateGenderDTO) {
    const genderEntity = new GenderEntity();
    genderEntity.name = gender.name;
    return this.genderService.createGender(genderEntity)
  }

}
