import { LoginResponseDto } from 'src/users/dtos/loginResponse.dto';

export interface UserJwtResponse {
  user: LoginResponseDto;
  accessToken: string;
}
