import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document ,Types } from 'mongoose';
import { Category, CategorySchema } from './category.schema';
import { Transform, Type } from 'class-transformer';


export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  description: string;
  @Prop({ default: '' })
  richDescription: string;
  @Prop({ default: '' })
  image: string;
  @Prop()
  images: string[];
  @Prop()
  brand: string;
  @Prop({ default: 0 })
  price: number;
  @Prop({type:mongoose.Schema.Types.ObjectId, ref:'Category'})
  category:Category;
  @Prop({ required: true, max: 250, min: 0 })
  countInStock: number;
  @Prop({ default: 0 })
  rating: number;
  @Prop({ default: 0 })
  numReviews: number;
  @Prop({ default: false })
  isFeatured: boolean;
  @Prop({ default: Date.now })
  dateCreated: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
