import { Module } from '@nestjs/common';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { ProductRepository } from 'src/repositories/product.repository';
import { Product, ProductSchema } from 'src/schema/product.schema';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';


@Module({
  imports:[MongooseModule.forFeature([{name:Product.name,schema:ProductSchema}])],
  controllers: [ProductController],
  providers: [ProductService,ProductRepository]
})
export class ProductModule {}
