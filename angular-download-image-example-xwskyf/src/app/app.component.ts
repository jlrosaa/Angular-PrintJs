import { Component } from '@angular/core';

import { ImageService } from './image.service'
import printJS=require('print-js');

@Component({
  selector: 'my-app',
  template: `
    <button (click)="getImage()">Get Image</button>
    <img src="{{data}}" *ngIf="data" alt="Your image" style="display: block" />
    
     <button (click)="printImage()">Print Image</button>
  `
})
export class AppComponent  {
  data: string;
  image:any;
  constructor(private imageService: ImageService) {}

  getImage() {
    this.imageService.getData('https://upload.wikimedia.org/wikipedia/commons/e/e0/Clouds_over_the_Atlantic_Ocean.jpg')
      .subscribe(
        imgData => this.data = imgData,
        err => console.log(err)
      );
  }

  printImage(){
    printJS(this.data ,"image");
  }

}
