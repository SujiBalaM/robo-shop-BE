import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()

export class ProductService {

    constructor(
        @InjectRepository(Product)
        private productRepository:Repository<Product>
    ){}
    async findAll():Promise<Product[]>{
        return await this.productRepository.find();
    }
    async findOne(id:number):Promise<Product>{
        return await this.productRepository.findOne({
            where:{id:id}
        })
    }
    async create(createProductDto:CreateProductDto){
        return await this.productRepository.save(createProductDto);
    }

    async update(updateProductDto:UpdateProductDto) {
         await this.productRepository.update(updateProductDto.id,{
            ...updateProductDto
        })
        return await this.findOne(updateProductDto.id);
    }

    async remove(id:number) {
        return await this.productRepository.delete(id);
    }
}
