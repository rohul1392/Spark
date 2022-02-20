import { EntityRepository, Repository } from "typeorm";
import { Category } from "src/entities/category.entity";
import { CreateCategoryDto } from "src/category/dtos/create-category.dto";

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category>{
    async createCategoy(createCategoryDto:CreateCategoryDto) {
        const { name,icon,color,image } = createCategoryDto;
        const category = new Category();
        
        category.name = name;
        category.icon = icon;
        category.color = color;
        category.image = image;

        return await this.save(category);
    
       
      }
      async getCategory() {
        return await this.find();
      }

      async deleteCategory(id:string){

        const category =await this.findOne(id);
        await this.remove(category);
        

      }
}