import { IsNotEmpty, IsString, IsOptional } from "class-validator";

export class UpdateBookDTO {
    id: string;

    @IsNotEmpty({
        message: 'Nome é Obrigatório'
    })
    @IsString({
        message: "Nome tem que ser string"
    })
    @IsOptional()
    name: string;

    @IsNotEmpty({
        message: 'Descrição é Obrigatório'
    })
    @IsString({
        message: "Descrição tem que ser string"
    })
    @IsOptional()
    description: string;

    @IsNotEmpty({
        message: 'Autor é Obrigatório'
    })
    @IsOptional()
    author_id: string;
}