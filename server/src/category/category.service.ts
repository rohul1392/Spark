import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from 'src/category/dtos/create-category.dto';
import { CategoryRepository } from 'src/repositories/category.repository';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  //constructor(@InjectRepository(Category) private repo: Repository<Category>) {}
  constructor(
    //@InjectRepository(CategoryRepository)
    private categoryRepo: CategoryRepository,
  ) {}

  async createCategoy(createCategoryDto: CreateCategoryDto) {
    return await this.categoryRepo.createCategoy(createCategoryDto);
  }
  async getCategory() {
    return await this.categoryRepo.getCategory();
  }

  async delete(id: string) {
    return await this.categoryRepo.deleteCategory(id);
  }
}
