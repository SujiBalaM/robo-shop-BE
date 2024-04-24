import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CartService } from "./cart.service";
import { CreateCartDto } from "./dto/create-cart.dto";


@Controller('cart')
export class CartController {
constructor(private cartService:CartService){}

@Post()
async create(@Body() createCartDto:CreateCartDto) {
    return await this.cartService.create(createCartDto);
}
@Get()
async getCartProducts() {
    return await this.cartService.findAll();
}
@Get('/:id')
async getCartProduct(@Param() id:number) {
    return await this.cartService.findOne(id);
}

@Delete("/:id")
async removeCartProduct(@Param("id") id:number) {
    return await this.cartService.remove(id);
}

}