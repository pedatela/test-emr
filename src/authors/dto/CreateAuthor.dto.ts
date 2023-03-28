import { IsNotEmpty, IsString } from "class-validator";
import { AuthorNameIsUnique } from "../validations/AuthorIsUnique.validations";

export class CreateAuthorDTO {
  id: string;

  @IsNotEmpty({
    message: 'Nome é Obrigatório'
  })

  @IsString({
    message: "Nome tem que ser string"
  })

  @AuthorNameIsUnique({
    message: 'Autor já existe'
  })
  name: string;


  @IsNotEmpty({
    message: 'Gender é Obrigatório'
  })

  @IsString({
    message: "Gender tem que ser string"
  })
  gender_id: string

}