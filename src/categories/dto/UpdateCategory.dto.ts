import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateCategoryDTO {
    id: number;

    @IsNotEmpty({
        message: 'Nome é Obrigatório'
    })
    @IsString({
        message: "Nome tem que ser string"
    })
    @IsOptional()
    name: string;

}