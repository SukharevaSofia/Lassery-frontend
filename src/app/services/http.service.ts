import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from '../environments/environment'

import {Observable, tap, timeout} from "rxjs";
import {UploadRequest} from "../utility/UploadRequest";
import {UploadResponse} from "../utility/UploadResponse";
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
  uploadHttpRequest(uploadRequest: UploadRequest): Observable<UploadResponse>{
    return this.http.post<UploadResponse>(this.baseUrl.concat("/UPLOAD"), uploadRequest, {
      observe: 'body',
      responseType: 'json'
    }).pipe(
      timeout(3000)
    )
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
