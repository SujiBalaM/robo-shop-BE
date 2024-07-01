import { Body, Controller, Post, Put } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from 'src/users/dtos/sign-up.dto';
import { User } from 'src/users/user.entity';
import { LoginDto } from 'src/users/dtos/login.dto';
import { UserJwtResponse } from './user-jwt.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() signupDto: SignUpDto): Promise<User> {
    return await this.authService.signUp(signupDto);
  }

  @Put('login')
  async login(@Body() loginDto: LoginDto): Promise<UserJwtResponse> {
    return await this.authService.login(loginDto);
  }
}
