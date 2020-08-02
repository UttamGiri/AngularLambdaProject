import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class S3BucketService {

  constructor(private http: HttpClient) { }

  public getFromS3Bucket(): Observable<any> {
    let accessToken: string = localStorage.getItem('access-token');
    console.log("access token >> " + accessToken);
    //   Http Interceptor yet to be implemented

    const headerDict = {
      //'Content-Type': 'application/json',
      //'Accept': 'application/json',
     // 'Access-Control-Allow-Headers': 'Content-Type',
      'Authorizer': accessToken,
      // Required for CORS support to work
      //"Access-Control-Allow-Origin" : "*"
 
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    return this.http.get<any>(environment.S3ClientURL, requestOptions);
  }

  
}


