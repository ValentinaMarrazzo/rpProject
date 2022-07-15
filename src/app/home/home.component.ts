import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPhotoCard } from '../pages/iphoto-card';
import { PagesService } from '../pages/pages.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private pages:PagesService) { }

  ngOnInit(): void {


    this.getPhList()
  }

getPhList(){
  this.pages.getPhotos().subscribe((res) => {
    this.photos = res

  })

}

photos!:IPhotoCard[]
}
