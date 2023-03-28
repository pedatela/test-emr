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
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const category_entity_1 = require("../categories/category.entity");
const book_entity_1 = require("./book.entity");
let BookService = class BookService {
    constructor(bookRepository, categoryRepository) {
        this.bookRepository = bookRepository;
        this.categoryRepository = categoryRepository;
        this.books = [];
    }
    getAllBooks(author_id) {
        return this.bookRepository.find({ where: { author_id } });
    }
    getBookByName(bookName) {
        return this.books.find(book => book.name === bookName);
    }
    createBook(book) {
        const categoriesArray = [];
        for (let index = 0; index < book.categories.length; index++) {
            const categoryEntity = new category_entity_1.CategoryEntity();
            const category = book.categories[index];
            categoryEntity.name = `${category}`;
            this.categoryRepository.save(categoryEntity);
            categoriesArray.push(categoryEntity);
        }
        book = Object.assign(Object.assign({}, book), { categories: categoriesArray });
        const createdBook = this.bookRepository.create(book);
        this.bookRepository.save(createdBook);
        return createdBook;
    }
    async update(id, bookData) {
        const author = await this.findById(id);
        this.bookRepository.update(id, bookData);
        return author;
    }
    async delete(id) {
        const book = this.findById(id);
        this.bookRepository.delete(id);
        return book;
    }
    findById(id) {
        const possibleBook = this.bookRepository.find({ where: { id } });
        if (!possibleBook) {
            throw new Error('Book does not Exists');
        }
        return possibleBook;
    }
};
BookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(book_entity_1.BookEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(category_entity_1.CategoryEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map