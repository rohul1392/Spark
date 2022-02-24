import { BadRequestException, forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAdminDto } from 'src/admin/dtos/cerate-admin.dto';
import { AuthService } from 'src/auth/auth.service';
import { Role } from 'src/auth/role/role.enum';
import * as bcrypt from 'bcrypt';
import { Admin, AdminDocument } from 'src/schema/admin.schema';

@Injectable()
export class AdminRepository {
  constructor(
    @InjectModel(Admin.name)
    @Inject(forwardRef(() => AuthService))
    private adminModel: Model<AdminDocument>,
    private authService: AuthService,
  ) {}

  async signup(name: string, email: string, Password: string, role: Role) {
      const user = this.adminModel.findOne({email});
      if(user){
        throw new BadRequestException("User already exits")
      }

    const password = await this.authService.encrypt(Password);
    return await new this.adminModel({ name, email, password, role }).save();
  }
  async signin(email:string,password:string){
        const user = await this.adminModel.findOne({email});
        if(!user){
            throw new BadRequestException("user does not exits")
        }
        const match= this.authService.decrypt(password,(await user).password);
        // if(!match){
        //   throw new BadRequestException("Password does not match!");
        // }
        if (!(await bcrypt.compare(password, (await user).password))) {
          throw new BadRequestException('Password does not match');
        }
        return user;
  }
}
