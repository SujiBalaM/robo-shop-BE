import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name?: string;
  @ApiProperty()
  description?: string;
  @ApiProperty()
  category?: string;
  @ApiProperty()
  imageurl?: string;
  @ApiProperty()
  price?: number;
  @ApiProperty()
  discount?: number;
}
