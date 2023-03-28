"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorController = void 0;
const common_1 = require("@nestjs/common");
const author_entity_1 = require("./author.entity");
const author_service_1 = require("./author.service");
const CreateAuthor_dto_1 = require("./dto/CreateAuthor.dto");
const UpdateAuthor_dto_1 = require("./dto/UpdateAuthor.dto");
let AuthorController = class AuthorController {
    constructor(authorService) {
        this.authorService = authorService;
    }
    async getAllAuthors() {
        return await this.authorService.getAllAuthors();
    }
    async createAuthor(author) {
        const authorEntity = new author_entity_1.AuthorEntity();
        authorEntity.name = author.name;
        authorEntity.gender_id = author.gender_id;
        console.log(authorEntity);
        const createdAuthor = await this.authorService.createAuthor(authorEntity);
        return {
            data: createdAuthor,
            message: 'Author successfuly created'
        };
    }
    async updateAuthor(id, author) {
        await this.authorService.update(id, author);
        return {
            message: 'Author successfuly updated'
        };
    }
    async deleteAuthor(id) {
        const deletedAuthor = await this.authorService.delete(id);
        return {
            data: deletedAuthor,
            message: 'Author successfuly deleted'
        };
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "getAllAuthors", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateAuthor_dto_1.CreateAuthorDTO]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "createAuthor", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateAuthor_dto_1.UpdateAuthorDTO]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "updateAuthor", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "deleteAuthor", null);
AuthorController = __decorate([
    (0, common_1.Controller)('authors'),
    __metadata("design:paramtypes", [author_service_1.AuthorService])
], AuthorController);
exports.AuthorController = AuthorController;
//# sourceMappingURL=author.controller.js.map