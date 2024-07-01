import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return await this.productService.create(createProductDto);
  }

  @Get()
  async getProducts() {
    return await this.productService.findAll();
  }
  @Get('/:id')
  async getProduct(@Param('id') id: number) {
    return await this.productService.findOne(id);
  }
  @Put('/:id')
  async updateProduct(
    @Param('id') id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return await this.productService.update(updateProductDto);
  }
  @Delete('/:id')
  async removeProduct(@Param('id') id: number) {
    return await this.productService.remove(id);
  }
}
