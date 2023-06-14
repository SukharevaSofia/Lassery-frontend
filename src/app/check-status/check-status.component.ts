import { Component } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {CheckResponse} from "../utility/CheckResponse";

@Component({
  selector: 'app-check-status',
  templateUrl: './check-status.component.html',
  styleUrls: ['./check-status.component.css']
})
export class CheckStatusComponent {
  fileList : number[] = [];
  CheckStatus(){
    let   statusUrl = environment.baseUrl + "status"
    const options = {headers: {'Content-Type': 'application/json'}};
    this.http.get<CheckResponse>(statusUrl).subscribe(//TODO})
  }

  constructor(private http:HttpClient) {
  }

}
