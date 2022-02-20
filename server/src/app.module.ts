import { Module } from '@nestjs/common';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Config } from './config/orm.config';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';




@Module({
  imports: [TypeOrmModule.forRoot(Config),ProductModule, CategoryModule,CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
