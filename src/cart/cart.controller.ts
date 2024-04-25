import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { Product } from 'src/product/product.entity';

@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @Post()
  async create(@Body() createCartDto: CreateCartDto) {
    return await this.cartService.create(createCartDto);
  }
  @Get()
  async getCartProducts() {
    return await this.cartService.findAll();
  }
  @Get('/:id')
  async getCartProduct(@Param() id: number) {
    return await this.cartService.findOne(id);
  }

  @Delete('/:id')
  async removeCartProduct(@Param('id') id: number) {
    return await this.cartService.remove(id);
  }

  @Put('/add_to_cart/:id')
  async addToCart(@Param('id') id: number, @Body() product: Product) {
    return await this.cartService.addProductsToCart(id, product);
  }

  @Delete('/remove_product_from_cart/:cart_id/:product_id')
  async remove_product_from_cart(
    @Param('cart_id') cart_id: number,
    @Param('product_id') product_id: number,
  ) {
    return await this.cartService.removeProductFromCart(cart_id, product_id);
  }
}
