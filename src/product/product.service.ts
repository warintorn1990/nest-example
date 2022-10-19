import { Injectable } from "@nestjs/common";
import { ProductDTO } from "src/dto/product.dto";
@Injectable()
export class ProductService {
  private products: ProductDTO[] = [
    { name: "A", id: 1, price: 100 },
    { name: "B", id: 2, price: 200 },
    { name: "C", id: 3, price: 300 },
    { name: "D", id: 4, price: 400 },
  ];

  findAll(): ProductDTO[] {
    return this.products;
  }

  findById(id: number) {
    return this.products.find((p) => p.id === id);
  }

  findByConditoin(predicate: (product: ProductDTO) => boolean) {
    return this.products.filter((p) => predicate(p));
  }
}
