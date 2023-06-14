import { Component, OnInit } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UploadResponse} from "../utility/UploadResponse";
import {UploadRequest} from "../utility/UploadRequest";
import {Observable, timeout} from "rxjs";


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
    formData.append("fileContentBase64", btoa(this.file))
    let updateUrl = environment.baseUrl + "upload"

    const options = {headers: {'Content-Type': 'application/json'}};

    this.http.post(updateUrl, JSON.stringify({"fileContentBase64": btoa(this.file), "checksum": false, "renderAsText": false}), options)
      .subscribe((response) =>{});
    console.log(JSON.stringify({"fileContentBase64": btoa(this.file), "checksum": false, "renderAsText": false}))
  }

  constructor(private http:HttpClient) {
  }
}

