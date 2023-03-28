import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from "class-validator";
import { AuthorService } from "../author.service";
export declare class AuthorIsUniqueValidator implements ValidatorConstraintInterface {
    private authorService;
    constructor(authorService: AuthorService);
    validate(value: any, validationArguments?: ValidationArguments): Promise<boolean>;
}
export declare const AuthorNameIsUnique: (options: ValidationOptions) => (object: Object, properties: string) => void;
