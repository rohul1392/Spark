import { ObjectId } from "mongodb";
import { Role } from "../role/role.enum";

export interface JwtPayload{
    _id:ObjectId;
    role:Role;
}