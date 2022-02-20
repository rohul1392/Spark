
import { IsString } from "class-validator";


export class CreateCategoryDto{
    @IsString()
    name:string;
    @IsString()
    icon:string;
    @IsString()
    color:string;
    @IsString()
    image:string[];
   
    
    
}