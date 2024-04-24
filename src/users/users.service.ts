import { Injectable } from '@nestjs/common';


export type User = any;
@Injectable()
export class UsersService {

    private readonly users = [
        {
            userId:1,
            username:'sujathamanoharan7@gmail.com',
            password:'Sujatha123@'

        },
        {
            userId:2,
            username:'vishnuharish12@gmail.com',
            password:"Harish123@"
        }
    ];

    async findOne(username:string):Promise<User|undefined>{
        return await this.users.find(user => user.username === username);
    }
}
