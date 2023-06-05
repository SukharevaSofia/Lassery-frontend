import { Component, OnInit } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";



@Component({
  selector: 'app-file-upload',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.css']
})
export class FileInputComponent{
  file: any;
  getFile(event: any){
    this.file = event.target.files[0]
    console.log("file: ", this.file)
  }

  SubmitData(){
    let formData = new FormData();
    formData.set("file", this.file)
    let updateUrl = environment.baseUrl + "UPDATE"
    this.http.post(updateUrl, formData)
      .subscribe((response) =>{});
  }

  constructor(private http:HttpClient) {
  }
}

