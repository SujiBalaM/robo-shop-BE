import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService:UsersService){}

    async validateuser(username:string,password:string):Promise<any>{
        const user = await this.userService.findOne(username);

        if(user && user.password === password){
            const {password, ...result} = user;
            return result;
        }
        return null;
    }
}
