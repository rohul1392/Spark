import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Category } from './category.schema';

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
  @Prop({ ref: 'Category', required: true })
  category: mongoose.Schema.Types.ObjectId;
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
