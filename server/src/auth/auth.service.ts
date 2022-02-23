import { forwardRef, Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AdminRepository } from 'src/repositories/admin.repository';
import { Admin } from 'src/schema/admin.schema';

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(()=>AdminRepository))
        private adminRepo:AdminRepository
    ){}

    async encrypt(password:string){
        return await bcrypt.hash(password,12);
    }
    async decrypt(password:string,hashPassword:string){
        return await bcrypt.compare(password,hashPassword);
    }
}
