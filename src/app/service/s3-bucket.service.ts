import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { HttpModule } from '@angular/http'; doesntnot support depreceiated in angular 8

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
      'Content-Type': 'application/json',
      //'Accept': 'application/json',
     // 'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': accessToken,
      // Required for CORS support to work
     // "Access-Control-Allow-Origin" : "*"
 
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    
    let url: string = environment.S3ClientURL+"?id=101";
    console.log("get url called >>>>" + url);

    return this.http.get<any>(url, requestOptions);
  }

  public getFromDynamoDB(): Observable<any> {
    let accessToken: string = localStorage.getItem('access-token');
    console.log("access token >> " + accessToken);
    //   Http Interceptor yet to be implemented

    const headerDict = {
      'Content-Type': 'application/json',
      //'Accept': 'application/json',
     // 'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': accessToken,
      // Required for CORS support to work
     // "Access-Control-Allow-Origin" : "*"
 
    }
    
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    
    let url: string = environment.dynamoDBFindURL+"?id=1";
    console.log("get url called >>>>" + url);

    return this.http.get<any>(url, requestOptions);
  }

  
}


