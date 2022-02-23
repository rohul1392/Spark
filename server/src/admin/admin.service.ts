import { Injectable } from '@nestjs/common';
import { Role } from 'src/auth/role/role.enum';
import { AdminRepository } from 'src/repositories/admin.repository';
import { CreateAdminDto } from './dtos/cerate-admin.dto';

@Injectable()
export class AdminService {
    constructor(private adminRepository:AdminRepository){}

    async createAdmin(name:string,email:string,password:string,role:Role){
        //const {name,email,password,role} = createAdminDto;
        return this.adminRepository.createAdmin(name,email,password,role);
    }
}
