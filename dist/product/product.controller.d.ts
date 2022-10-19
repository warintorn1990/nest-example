import { ProductDTO } from "src/dto/product.dto";
import { ProductService } from "./product.service";
export declare class ProductController {
    productService: ProductService;
    constructor(productService: ProductService);
    getProductAll(productName?: string): ProductDTO[];
    getProductById(id: string): ProductDTO;
}
