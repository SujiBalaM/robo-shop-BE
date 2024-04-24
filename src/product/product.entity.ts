import { CartEntity } from "src/cart/cart.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column({nullable:true})
    description:string;
    @Column()
    imageurl: string;

    @Column()
    category: string;
    @Column()
    price: number;
    @Column()
    discount: number;

    @CreateDateColumn({type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP'})
    createdDate:Date;

    @UpdateDateColumn({type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP'})
    updatedDate:Date;

    // @OneToMany(() => CartEntity,(cart) => cart.products )
    // cart:CartEntity[]

}