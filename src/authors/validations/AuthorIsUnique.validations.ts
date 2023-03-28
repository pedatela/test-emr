import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { AuthorService } from "../author.service";

@Injectable()
@ValidatorConstraint({ async: true })

export class AuthorIsUniqueValidator implements ValidatorConstraintInterface {
  constructor(private authorService: AuthorService) { }

  async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
    const userExists = await this.authorService.findAuthorByName(value)
    return !userExists;
  }

}

export const AuthorNameIsUnique = (options: ValidationOptions) => {
  return (object: Object, properties: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: properties,
      options: options,
      constraints: [],
      validator: AuthorIsUniqueValidator
    })
  }
}


// @Injectable()
// @ValidatorConstraint({ async: true })
// export class EmailEhUnicoValidator implements ValidatorConstraintInterface {

//     constructor(private usuarioRepository: UsuarioRepository) {}

//     async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> { 
//         const usuarioComEmailExiste = await this.usuarioRepository.existeComEmail(value);
//         return !usuarioComEmailExiste;
//     }
// }

// // ...

// export const EmailEhUnico = (opcoesDeValidacao: ValidationOptions) => {
//   return (objeto: Object, propriedade: string) => {
//       registerDecorator({
//           target: objeto.constructor,
//           propertyName: propriedade,
//           options: opcoesDeValidacao,
//           constraints: [],
//           validator: EmailEhUnicoValidator
//       });
//   }
// }