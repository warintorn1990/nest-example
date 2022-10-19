import { ProductDTO } from "src/dto/product.dto";
export declare class ProductService {
    private products;
    findAll(): ProductDTO[];
    findById(id: number): ProductDTO;
    findByConditoin(predicate: (product: ProductDTO) => boolean): ProductDTO[];
}
