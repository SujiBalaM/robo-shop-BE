import { IsString, IsEmail, MinLength, Matches } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class SignUpDto {
  @IsEmail()
  @ApiProperty()
  email:string;

  @IsString()
  @ApiProperty()
  username: string;

  @IsString()
  @MinLength(8)
  @ApiProperty()
 @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'password must contain uppercase, lowercase, number and special character',
  })
  password: string;
}
