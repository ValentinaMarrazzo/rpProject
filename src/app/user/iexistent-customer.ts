import { Iproduct } from "../shop/product/iproduct";

export interface IexistentCustomer {
  id:number;
  email:string;
  nickname:string;
  purchases:Iproduct[];
  userId:number;
  activeStatus:boolean;

}
