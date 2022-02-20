import { MongooseModuleOptions } from "@nestjs/mongoose";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const Config ={
    type:'mongodb',
    url: 'mongodb+srv://spark:3JbTRwKvnv3B1SY8@cluster0.ioocg.mongodb.net/spark?retryWrites=true&w=majority',
    useNewUrlParser:true,
    useUnifiedTopology:true,
    ssl:true,
    //authSource:'admin', 
    synchronize:true,
    entities:["dist/**/*.entity{ .ts,.js}"]
}