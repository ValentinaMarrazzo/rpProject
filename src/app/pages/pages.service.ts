import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPhotoCard } from './iphoto-card';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  photosUrl = 'http://localhost:4201/photos'


  constructor(private http:HttpClient) { }


getPhotos(){
 return this.http.get<IPhotoCard[]>(this.photosUrl)
}



}
