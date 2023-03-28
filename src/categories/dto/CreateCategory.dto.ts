import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDTO {
    id: number;

    @IsNotEmpty({
        message: 'Nome é Obrigatório'
    })
    @IsString({
        message: "Nome tem que ser string"
    })
    name: string;

}