import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CartEntity } from "./cart.entity";
import { Repository } from "typeorm";
import { CartRepository } from "./cart.repository";
import { CreateCartDto } from "./dto/create-cart.dto";


@Injectable()

export class CartService {
    constructor(
        @InjectRepository(CartEntity) 
        private cartRepository:Repository<CartEntity>
    ){}

    async findAll():Promise<CartEntity[]>{
        return await this.cartRepository.find()
    }

    async findOne(id:number):Promise<CartEntity>{
        return await this.cartRepository.findOne({
            where:{id:id} 
        })
    }

    async create(createCartDto:CreateCartDto) {
        return await this.cartRepository.save(createCartDto)
    }

    async remove(id:number){
        return await this.cartRepository.delete(id);
    }

}