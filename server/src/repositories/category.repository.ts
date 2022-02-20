import { EntityRepository, Repository } from "typeorm";
import { Category, CategoryDocument } from "src/schema/category.schema";
import { CreateCategoryDto } from "src/category/dtos/create-category.dto";
import { Model } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CategoryRepository {

  constructor(@InjectModel(Category.name) private categoryModel:Model<CategoryDocument>){}



    async createCategoy(createCategoryDto:CreateCategoryDto) {
        return await new this.categoryModel({
          ...createCategoryDto
        }).save();
    
       
      }
      async getCategory() {
        return await this.categoryModel.find().exec();
      }

      async deleteCategory(id:string){

        //const category =await this.categoryModel.findById(id).exec();
        await this.categoryModel.findByIdAndDelete(id).exec()
        

      }
}