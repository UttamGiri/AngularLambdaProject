import { Component, OnInit } from '@angular/core';
import { AwsCognitoService } from '../service/aws-cognito.service';
import { environment } from 'src/environments/environment';
import { S3BucketService } from '../service/s3-bucket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tokenDetails: any;
  token: any;

  s3ClientText: string;
  dynamoClientText: string;

  constructor(private awsCognitoService: AwsCognitoService, private s3BucketService: S3BucketService) { }

  ngOnInit(): void {
    console.log('Access Token: >> ', localStorage.getItem('access-token'));

    this.token = localStorage.getItem('access-token');

    if (this.token) {
      const base64Url = this.token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      this.tokenDetails = JSON.parse(atob(base64));

      console.log("Access Token Details >>>" + JSON.stringify(this.tokenDetails));
    }

     this.s3BucketService.getFromS3Bucket().subscribe(
       res => {
         console.log(res); 
         this.s3ClientText = res.name; 
      }, 
      err => {
        console.log(err) 
      }
     );
   
     this.getFromDynamoDB();
  }

  getFromDynamoDB(){
    this.token = localStorage.getItem('access-token');

    if (this.token) {
      const base64Url = this.token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      this.tokenDetails = JSON.parse(atob(base64));

      console.log("Access Token Details >>>" + JSON.stringify(this.tokenDetails));
    }

     this.s3BucketService.getFromDynamoDB().subscribe(
       res => {
         console.log(res); 
         this.dynamoClientText = res.name; 
      }, 
      err => {
        console.log(err) 
      }
     );
  }

  logout(): void {
    window.location.assign(environment.logout);
    localStorage.clear();

  }

}


//now use http interceptor to append Authorizer access-token  for subsequent calls
// for refresh when there is error calling  access token  prompt to call refresh token .  or every 10 min call refresh token.
