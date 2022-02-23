import { Injectable } from '@nestjs/common';
import { AdminRepository } from 'src/repositories/admin.repository';
import { CreateAdminDto } from './dtos/cerate-admin.dto';

@Injectable()
export class AdminService {
    constructor(private adminRepository:AdminRepository){}

    async createAdmin(createAdminDto:CreateAdminDto){
        const {name,email,password,role} = createAdminDto;
        return this.adminRepository.createAdmin(createAdminDto);
    }
}
