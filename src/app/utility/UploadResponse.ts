import * as http from "http";


export interface UploadResponse {
  message: string[];
  resultCode: http.ServerResponse;
}
