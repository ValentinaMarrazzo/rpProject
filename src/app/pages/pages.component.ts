import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iphotos } from './iphotos';
import { PagesService } from './pages.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(private pages:PagesService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      let url = p['url'];

      this.fillArray(url)


    });
  }

  viewCarousel = false;
  element!:any

  currentPagePh!:any

  elId!:number;
  class = 'normal'

  fillArray(url:string){
    this.pages.getPhotos().subscribe((res) => {
      let allCatArray = res;
      let currentCat = allCatArray.find(p => p.slug === url)
      this.currentPagePh = currentCat?.photos
    })
  }

  getElement(id:string){
    this.element =  document.getElementById(id);
  }

  scrollToElementById(id:any){
    this.element =  document.getElementById(id);
    this.element.scrollIntoView({behavior: 'smooth'})
    this.elId = id
  }

  resize(b:boolean){
    if(b == true){
      this.class = 'larger';
    } else {
      this.class = 'normal';
    }
  }


}
