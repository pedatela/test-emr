import { IsNotEmpty, IsString } from "class-validator";

export class CreateGenderDTO {
    id: number;

    @IsNotEmpty({
        message: 'Nome é Obrigatório'
    })
    @IsString({
        message: "Nome tem que ser string"
    })
    name: string;

}