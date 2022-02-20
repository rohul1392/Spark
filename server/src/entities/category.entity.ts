import { Column, Entity, ObjectIdColumn } from "typeorm";


@Entity()
export class Category{
    
    @ObjectIdColumn()
    id:string;
    @Column()
    name:string;
    @Column()
    icon:string;
    @Column()
    color:string;
    @Column()
    image:string[];
    
    
    

}