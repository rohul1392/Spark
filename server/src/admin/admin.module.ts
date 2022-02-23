import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Admin, AdminSchema } from 'src/schema/admin.schema';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AdminRepository } from 'src/repositories/admin.repository';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports:[MongooseModule.forFeature([{name:Admin.name,schema:AdminSchema}])],
  controllers: [AdminController],
  providers: [AdminService,AdminRepository,AuthService]
})
export class AdminModule {}
