import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Role } from "src/auth/role/role.enum";

export type AdminDocument = Admin & Document;

@Schema()
export class Admin{
    @Prop()
    name:string;
    @Prop()
    email:string;
    @Prop()
    password:string;
    @Prop({enum:Role,default:Role.Admin})
    role:Role;

}

export const AdminSchema =SchemaFactory.createForClass(Admin);