import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Admin, AdminSchema } from 'src/schema/admin.schema';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AdminRepository } from 'src/repositories/admin.repository';
import { AuthService } from 'src/auth/auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtGuard } from 'src/auth/gurds/jwt.gurd';
import { JwtStrategy } from 'src/auth/gurds/jwt.strategy';

@Module({
  imports:[
    MongooseModule.forFeature([{name:Admin.name,schema:AdminSchema}]),
    PassportModule.register({
      defaultStrategy: 'jwt',
      session: true,
    }),
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AdminController],
  providers: [
    AdminService,
    AdminRepository,
    AuthService,
    JwtGuard,
    JwtStrategy
  ]
})
export class AdminModule {}
