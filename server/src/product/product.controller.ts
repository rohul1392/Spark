import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';

import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private productService:ProductService){}

    @Post('/create')
    createProduct(@Body() createProductDto:CreateProductDto){

        return this.productService.create(createProductDto);

    }
    //@Get('/get')
    
    
}
