import { Module } from '@nestjs/common';
import { Config } from './config/orm.config';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { MongooseModule } from '@nestjs/mongoose';

import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    //TypeOrmModule.forRoot(Config),
    MongooseModule.forRoot(Config.url),
    ProductModule,
    CategoryModule,
    AdminModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
