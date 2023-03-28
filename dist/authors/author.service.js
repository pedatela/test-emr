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
exports.AuthorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const author_entity_1 = require("./author.entity");
let AuthorService = class AuthorService {
    constructor(authorRepository) {
        this.authorRepository = authorRepository;
    }
    getAllAuthors() {
        return this.authorRepository.find();
    }
    createAuthor(author) {
        const createdAuthor = this.authorRepository.create(author);
        this.authorRepository.save(createdAuthor);
        return createdAuthor;
    }
    async findAuthorByName(name) {
        const possibleAuthor = await this.authorRepository.findOne({ where: { name } });
        return possibleAuthor !== null;
    }
    async update(id, authorData) {
        const author = await this.findById(id);
        this.authorRepository.update(id, authorData);
        return author;
    }
    async delete(id) {
        const author = this.findById(id);
        this.authorRepository.delete(id);
        return author;
    }
    findById(id) {
        const possibleAuthor = this.authorRepository.find({ where: { id } });
        if (!possibleAuthor) {
            throw new Error('Author does not Exists');
        }
        return possibleAuthor;
    }
};
AuthorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(author_entity_1.AuthorEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AuthorService);
exports.AuthorService = AuthorService;
//# sourceMappingURL=author.service.js.map