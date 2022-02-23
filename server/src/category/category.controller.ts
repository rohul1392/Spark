import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateCategoryDto } from 'src/category/dtos/create-category.dto';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post('/create')
  createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.createCategoy(createCategoryDto);
  }
  @Get('/all')
  allCategory() {
    return this.categoryService.getCategory();
  }

  @Delete('/delete/:id')
  deleteCategory(@Param('id') id: string) {
    return this.categoryService.delete(id);
  }
}
