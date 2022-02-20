import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { CategoryRepository } from 'src/repositories/category.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from 'src/schema/category.schema';
import { Category } from 'src/schema/category.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Category.name,schema:CategorySchema}])],
  providers: [CategoryService,CategoryRepository],
  controllers: [CategoryController]
})
export class CategoryModule {}
