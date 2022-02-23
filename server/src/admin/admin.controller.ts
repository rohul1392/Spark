import { Body, Controller, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dtos/cerate-admin.dto';

@Controller('admin')
export class AdminController {
    constructor(private adminService:AdminService){}

    @Post('/create')
    async create(@Body()createAdminDto:CreateAdminDto){
        return this.adminService.createAdmin(createAdminDto);

    }
}
