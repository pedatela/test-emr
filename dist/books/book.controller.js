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
exports.BookController = void 0;
const common_1 = require("@nestjs/common");
const book_entity_1 = require("./book.entity");
const book_service_1 = require("./book.service");
const CreateBook_dto_1 = require("./dtos/CreateBook.dto");
const UpdateBook_dto_1 = require("./dtos/UpdateBook.dto");
let BookController = class BookController {
    constructor(bookService) {
        this.bookService = bookService;
    }
    getAllBooks(author_id) {
        return this.bookService.getAllBooks(author_id);
    }
    createBook(author_id, book) {
        const bookEntity = new book_entity_1.BookEntity();
        bookEntity.name = book.name;
        bookEntity.description = book.description;
        bookEntity.author_id = author_id;
        bookEntity.categories = book.categories;
        return this.bookService.createBook(bookEntity);
    }
    async updateAuthor(id, book) {
        await this.bookService.update(id, book);
        return {
            message: 'Author successfuly updated'
        };
    }
    getBookByName(id) {
        return this.bookService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('author_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BookController.prototype, "getAllBooks", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Param)('author_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CreateBook_dto_1.CreateBookDTO]),
    __metadata("design:returntype", void 0)
], BookController.prototype, "createBook", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateBook_dto_1.UpdateBookDTO]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "updateAuthor", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BookController.prototype, "getBookByName", null);
BookController = __decorate([
    (0, common_1.Controller)('authors/:author_id/books'),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookController);
exports.BookController = BookController;
//# sourceMappingURL=book.controller.js.map