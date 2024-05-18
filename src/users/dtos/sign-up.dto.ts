import { IsString, IsEmail, MinLength, Matches } from "class-validator";

export class SignUpDto {
  @IsEmail()
  email:string;

  @IsString()
  username: string;

  @IsString()
  @MinLength(8)
 @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'password must contain uppercase, lowercase, number and special character',
  })
  password: string;
}
