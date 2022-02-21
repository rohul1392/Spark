import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from 'src/schema/product.schema';
import { CreateProductDto } from 'src/product/dtos/create-product.dto';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async createProduct(createProductDto: CreateProductDto) {
    return await new this.productModel({
      ...createProductDto,
    }).save();
  }

  async getAllProduct(){
      return await this.productModel.find().exec();
  }
}
