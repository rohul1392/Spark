import { IsBoolean, IsDate, IsNumber, IsString } from "class-validator";

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
    category: string;
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