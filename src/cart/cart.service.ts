import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartEntity } from './cart.entity';
import { Repository } from 'typeorm';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateProductDto } from 'src/product/dto/update-product.dto';
import { Product } from 'src/product/product.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity)
    private cartRepository: Repository<CartEntity>,
  ) {}

  async findAll(): Promise<CartEntity[]> {
    return await this.cartRepository.find({
      relations: {
        products: true,
      },
    });
  }

  async findOne(id: number): Promise<CartEntity> {
    return await this.cartRepository.findOne({
      where: { id: id },
      relations: {
        products: true,
      },
    });
  }

  async create(createCartDto: CreateCartDto) {
    return await this.cartRepository.save(createCartDto);
  }

  async remove(id: number) {
    return await this.cartRepository.delete(id);
  }
  async addProductsToCart(id: number, product: Product) {
    const cart = await this.cartRepository.findOne({
      where: { id: 1 },
      relations: {
        products: true,
      },
    });
    cart.products.push(product);
    await this.cartRepository.save(cart);
    return await this.cartRepository.findOne({
      where: { id: cart.id },
      relations: { products: true },
    });
  }

  async removeProductFromCart(cart_id: number, product_id: number) {
    console.log(typeof product_id);
    const cart = await this.cartRepository.findOne({
      where: { id: cart_id },
      relations: {
        products: true,
      },
    });
    console.log(cart);
    cart.products = cart.products.filter(
      (product) => product.id !== Number(product_id),
    );
    console.log(cart.products);
    await this.cartRepository.save(cart);
    return await this.cartRepository.findOne({
      where: {
        id: cart_id,
      },
      relations: {
        products: true,
      },
    });
  }
}
