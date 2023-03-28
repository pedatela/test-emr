"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const book_entity_1 = require("../books/book.entity");
const author_controller_1 = require("./author.controller");
const author_entity_1 = require("./author.entity");
const author_service_1 = require("./author.service");
const AuthorIsUnique_validations_1 = require("./validations/AuthorIsUnique.validations");
let AuthorModule = class AuthorModule {
};
AuthorModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([author_entity_1.AuthorEntity, book_entity_1.BookEntity])],
        controllers: [author_controller_1.AuthorController],
        providers: [author_service_1.AuthorService, AuthorIsUnique_validations_1.AuthorIsUniqueValidator]
    })
], AuthorModule);
exports.AuthorModule = AuthorModule;
//# sourceMappingURL=author.module.js.map