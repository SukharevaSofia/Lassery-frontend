import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from '../environments/environment'

import {Observable, tap, timeout} from "rxjs";
import {UploadRequest} from "../utility/UploadRequest";
import {UploadResponse} from "../utility/UploadResponse";
import {CheckResponse} from "../utility/CheckResponse";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private token: string;

  constructor(private http: HttpClient) {
    this.token = "";
  }

  httpGetCheckStatus():Observable<number[]>{
    let   statusUrl = environment.baseUrl + "status"
    const options = {headers: {'Content-Type': 'application/json'}};
    return this.http.get<number[]>(statusUrl, options).pipe(timeout (100000))
  }

  httpGetFetchFile(id: number):Observable<string>{
    let fetchUrl = environment.baseUrl + "fetch?id=" + id
    return this.http.get(fetchUrl, {responseType : "text"}).pipe(timeout(100000))
  }

}
