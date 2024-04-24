import { Repository } from "typeorm";
import { CartEntity } from "./cart.entity";


export class CartRepository extends Repository<CartEntity>{}