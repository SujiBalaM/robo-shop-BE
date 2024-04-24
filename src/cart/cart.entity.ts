import { Product } from "src/product/product.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()

export class CartEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;
    @Column({nullable:true})
    description:string;

    @Column()
    category:string;

    @Column()
    imageurl:string;

    @Column()
    price:number;

    @Column()
    discount:number;

    @CreateDateColumn({type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP'})
    createdDate:Date;

    @UpdateDateColumn({type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP'})
    updatedDate:Date;

    @ManyToMany(() => Product)
    @JoinTable()
    products:Product[]
}