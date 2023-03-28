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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorEntity = void 0;
const gender_entity_1 = require("../genders/gender.entity");
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const book_entity_1 = require("../books/book.entity");
let AuthorEntity = class AuthorEntity {
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], AuthorEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AuthorEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AuthorEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AuthorEntity.prototype, "gender_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AuthorEntity.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => book_entity_1.BookEntity, (book) => book.author_id),
    __metadata("design:type", Array)
], AuthorEntity.prototype, "books", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => gender_entity_1.GenderEntity),
    (0, typeorm_1.JoinColumn)({ name: "gender_id" }),
    __metadata("design:type", gender_entity_1.GenderEntity)
], AuthorEntity.prototype, "gender", void 0);
AuthorEntity = __decorate([
    (0, typeorm_1.Entity)('authors'),
    __metadata("design:paramtypes", [])
], AuthorEntity);
exports.AuthorEntity = AuthorEntity;
//# sourceMappingURL=author.entity.js.map