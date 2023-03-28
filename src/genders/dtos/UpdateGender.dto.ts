import { IsNotEmpty, IsString, IsOptional } from "class-validator";

export class UpdateGenderDTO {
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