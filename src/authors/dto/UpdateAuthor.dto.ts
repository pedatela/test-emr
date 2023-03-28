import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { AuthorNameIsUnique } from "../validations/AuthorIsUnique.validations";

export class UpdateAuthorDTO {
  id: string;

  @IsNotEmpty({
    message: 'Nome é Obrigatório'
  })

  @IsString({
    message: "Nome tem que ser string"
  })

  @AuthorNameIsUnique({
    message: 'Author already exists'
  })
  @IsOptional()
  name: string;

}