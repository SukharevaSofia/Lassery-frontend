import { Component } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {CheckResponse} from "../utility/CheckResponse";
import {Observable, timeout} from "rxjs";
import {HttpService} from "../services/http.service";

@Component({
  selector: 'app-check-status',
  templateUrl: './check-status.component.html',
  styleUrls: ['./check-status.component.css']
})
export class CheckStatusComponent {
  listOfID!: number[]
  CheckStatus(){
    this.httpService.httpGetCheckStatus().subscribe(response=>{
      this.listOfID = response;
      alert("list: " + this.listOfID)
    })

  }

  constructor(private httpService: HttpService) {
  }

}
