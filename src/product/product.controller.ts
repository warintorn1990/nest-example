import { Controller, Get, Param, Query } from "@nestjs/common";
import { ProductDTO } from "src/dto/product.dto";
import { ProductService } from "./product.service";

@Controller("product")
export class ProductController {
  constructor(public productService: ProductService) {}

  @Get()
  getProductAll(@Query("name") productName?: string): ProductDTO[] {
    if (productName) {
      return this.productService.findByConditoin((product) =>
        product.name.includes(productName)
      );
    }
    return this.productService.findAll();
  }

  @Get(":id")
  getProductById(@Param("id") id: string) {
    return this.productService.findById(Number(id));
  }
}
