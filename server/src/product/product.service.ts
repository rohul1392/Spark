import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from 'src/repositories/category.repository';
import { ProductRepository } from 'src/repositories/product.repository';
import { CreateProductDto } from './dtos/create-product.dto';
import { Category } from 'src/schema/category.schema';

@Injectable()
export class ProductService {
    constructor(private productRepository:ProductRepository){}

    async create(createProductDto:CreateProductDto){
        return await this.productRepository.createProduct(createProductDto);
    }

    async allProduct(){
       return await this.productRepository.getAllProduct();
    }
}
