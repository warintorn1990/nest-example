"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
let ProductService = class ProductService {
    constructor() {
        this.products = [
            { name: "A", id: 1, price: 100 },
            { name: "B", id: 2, price: 200 },
            { name: "C", id: 3, price: 300 },
            { name: "D", id: 4, price: 400 },
        ];
    }
    findAll() {
        return this.products;
    }
    findById(id) {
        return this.products.find((p) => p.id === id);
    }
    findByConditoin(predicate) {
        return this.products.filter((p) => predicate(p));
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)()
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map