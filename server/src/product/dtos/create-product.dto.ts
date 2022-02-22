import { IsBoolean, IsDate, IsNumber, IsString } from "class-validator";
import mongoose from "mongoose";
import { Category } from "src/schema/category.schema";

export class CreateProductDto{
   
    @IsString()
    name: string;
    @IsString()
    description: string;
    @IsString()
    richDescription: string;
    @IsString()
    image: string;
    @IsString()
    images: string[];
    @IsString()
    brand: string;
    @IsNumber()
    price: number;
    @IsString()
    category: mongoose.Schema.Types.ObjectId;
    @IsNumber()
    countInStock: number;
    @IsNumber()
    rating: number;
    @IsNumber()
    numReviews: number;
    @IsBoolean()
    isFeatured: boolean;
    @IsDate()
    dateCreated: Date;
}