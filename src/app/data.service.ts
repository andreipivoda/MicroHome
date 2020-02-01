import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private serverUrl = "http://algoritmica.go.ro";
  constructor(private http: HttpClient) { }

  getData() {
    let headers = this.createRequestHeader();
    return this.http.get(this.serverUrl, { headers: headers });
  }

  private createRequestHeader() {
    // set headers here e.g.
    let headers = new HttpHeaders({
      // "AuthKey": "my-key",
      // "AuthToken": "my-token",
      "Content-Type": "application/json",
    });

    return headers;
  }
}
