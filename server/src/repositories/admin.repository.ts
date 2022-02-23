import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose'
import { CreateAdminDto } from 'src/admin/dtos/cerate-admin.dto';
import { AuthService } from 'src/auth/auth.service';
import { Role } from 'src/auth/role/role.enum';
import { Admin, AdminDocument } from 'src/schema/admin.schema';


@Injectable()
export class AdminRepository{

    constructor(
        @InjectModel(Admin.name)
        @Inject(forwardRef(()=>AuthService))
        private adminModel: Model<AdminDocument>,
        private authService:AuthService
    ){}

    async createAdmin(name:string,email:string,Password:string,role:Role){
        //const {name,email,password,role} = createAdminDto;
        const password =await this.authService.encrypt(Password);


        // console.log(password);
        
         return await new this.adminModel({name,email,password,role}).save();


    }



}