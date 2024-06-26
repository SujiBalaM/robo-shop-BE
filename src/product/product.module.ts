import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { ProductController } from './product.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([Product])],
  providers: [ProductService],
  controllers: [ProductController],
  exports: [TypeOrmModule],
})
export class ProductModule {}
