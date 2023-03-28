import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class CreateBookDTO {
  id: string;

  @IsNotEmpty({
    message: 'Nome é Obrigatório'
  })
  @IsString({
    message: "Nome tem que ser string"
  })
  name: string;

  @IsNotEmpty({
    message: 'Descrição é Obrigatório'
  })
  @IsString({
    message: "Descrição tem que ser string"
  })
  description: string;

  @IsArray({
    message: "Categorias tem que ser array de string"
  })
  categories: []
}