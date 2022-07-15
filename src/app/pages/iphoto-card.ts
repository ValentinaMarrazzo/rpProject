import { Iphotos } from "./iphotos"

export interface IPhotoCard {
  id:number,
  coverUrl:string,
  photos:Iphotos[],
  slug:string
}
