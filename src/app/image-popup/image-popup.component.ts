import { Component, OnInit } from '@angular/core';
import { ImageHandlerService } from '../image-handler.service';

@Component({
  selector: 'app-image-popup',
  templateUrl: './image-popup.component.html',
  styleUrls: ['./image-popup.component.css']
})
export class ImagePopupComponent implements OnInit {

  constructor(public imgService: ImageHandlerService) { }

  ngOnInit(): void {
  }

};
