import { Injectable } from '@angular/core';
import { ImageModel } from './image-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageHandlerService {

  imageID: number;
  imagePath: string;
  getImgObjURL: string = `http://localhost:3000/`;
  imageObj: ImageModel[];
  spinnerOn: boolean = false;

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient, private dialog: MatDialog) {

  }

  getImageObjects(): Observable<ImageModel> {
    return this.http.get<ImageModel>(`${this.getImgObjURL}`);
  };

  openImagePopUp(imageName: number, imagePath: string, componentToDisplay){
    this.imageID = imageName;
    this.imagePath = imagePath;
    this.dialog.open(componentToDisplay);
  }


};
