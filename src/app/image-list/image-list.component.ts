import { Component, OnInit } from '@angular/core';
import { ImageHandlerService } from '../image-handler.service';
import { ImageModel } from '../image-model';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { ImagePopupComponent } from '../image-popup/image-popup.component';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ImageListComponent implements OnInit {

  imgColumsObj = ['imageID', 'dominantColor', 'dominantPrimaryColor'];
  dataSource: ImageModel[];
  expandedElement: ImageModel | null;

  constructor(public imageService: ImageHandlerService, public dialog: MatDialog) {}

  ngOnInit(): void { 
    if (!this.imageService.imageObj){
      this.getImgObj();
    }
  }

  getImgObj(){
    this.imageService.getImageObjects().subscribe((res: any) => {
      this.imageService.spinnerOn = true;
      this.imageService.imageObj = res.data;
      this.dataSource = this.imageService.imageObj;
    })
  }

  openDialog(imageName: number, imagePath: string) {
    this.imageService.openImagePopUp(imageName, imagePath, ImagePopupComponent);
  };
  
};
