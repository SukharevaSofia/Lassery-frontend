import { Component } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {CheckResponse} from "../utility/CheckResponse";
import {Observable, timeout} from "rxjs";
import {HttpService} from "../services/http.service";


@Component({
  selector: 'app-check-status',
  templateUrl: './check-status.component.html',
  styleUrls: ['./check-status.component.scss']
})
export class CheckStatusComponent {
  listOfID!: number[]
  fileContents!: string

  CheckStatus(){
    this.httpService.httpGetCheckStatus().subscribe(response=>{
      this.listOfID = response;
      console.log("list: " + this.listOfID)
    })
  }

  FetchFile(id: number){
    this.httpService.httpGetFetchFile(id).subscribe(response =>{
      let node = document.getElementById("button_to_show_" + id)
      if (node != null){
        console.log("setting the node")
        node.innerText = atob(response);
        node.innerHTML = atob(response);
        node.textContent = atob(response);
      }
    })

  }

  constructor(private httpService: HttpService) {
  }

  protected readonly document = document;
}
