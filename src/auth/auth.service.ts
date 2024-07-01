import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from 'src/users/dtos/login.dto';
import { SignUpDto } from 'src/users/dtos/sign-up.dto';
import { UsersService } from 'src/users/users.service';
import { UserJwtResponse } from './user-jwt.interface';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUserById(userId: string) {
    return await this.userService.findById(userId);
  }

  async signUp(signUpDto: SignUpDto) {
    return await this.userService.create(signUpDto);
  }

  async login(loginDto: LoginDto) {
    const userResult = await this.userService.signIn(loginDto);
    if (!userResult) {
      throw new UnauthorizedException('Invalid Credentials');
    }

    const payload = { userResult };
    const accessToken = await this.jwtService.sign(payload);

    const signInResponse: UserJwtResponse = { user: userResult, accessToken };

    return signInResponse;
  }
}
