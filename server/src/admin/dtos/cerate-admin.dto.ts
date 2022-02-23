import { IsEmail, IsEnum, IsOptional, IsString } from "class-validator";
import { Role } from "src/auth/role/role.enum";

export class CreateAdminDto{
    @IsString()
    name:string;
    @IsEmail()
    email:string;
    @IsString()
    password:string;
    @IsOptional()
    @IsEnum(Role)
    role:Role;
}