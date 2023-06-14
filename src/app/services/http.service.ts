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

  private baseUrl = environment.baseUrl;
  private hitServeUrl = 'https://web5.sssofya.ru/backend/backend/hit';

  constructor(private http: HttpClient) {
    this.token = "";
  }

  httpGetCheckStatus():Observable<number[]>{
    let   statusUrl = environment.baseUrl + "status"
    const options = {headers: {'Content-Type': 'application/json'}};
    return this.http.get<number[]>(statusUrl).pipe(timeout (10000))
  }

//   fetchHttpRequest()

  // hitPostHttpRequest(hitRequest: HitRequest | null, hitRequestType: HitRequestType): Observable<HitResponse> {
  //   return this.http.post<HitResponse>(this.hitServeUrl.concat("/", hitRequestType), hitRequest, {
  //     observe: 'body',
  //     responseType: 'json',
  //     headers: new HttpHeaders({
  //       'Authorization': 'Bearer_'.concat(this.token)
  //     })
  //   }).pipe(
  //     timeout(3000)
  //   )
  // }
  //
  // hitGetHttpRequest(hitRequestType: HitRequestType): Observable<HitResponse> {
  //   return this.http.get<HitResponse>(this.hitServeUrl.concat("/", hitRequestType), {
  //     observe: 'body',
  //     responseType: 'json',
  //     headers: new HttpHeaders({
  //       'Authorization': 'Bearer_'.concat(this.token)
  //     })
  //   }).pipe(
  //     timeout(3000)
  //   )
  // }
  //
  // clearToken(): void {
  //   this.token = "";
  // }
}
