import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, finalize, catchError } from 'rxjs/operators';
import { Location } from '@angular/common';
import { AwsCognitoService } from '../service/aws-cognito.service';


@Injectable()
export class TokenResolverService implements Resolve<any> {

  constructor(private location: Location,
              private awsCognitoService: AwsCognitoService,
              private router: Router) { }

  resolve(): Observable<any | null> {

    const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
    const code: string = urlParams.get('code');
    console.log('code >> : ', code);

    if (!code) {
      return of(null);
    }

    return this.getTokenDetailsFromCognito(code).pipe(
      finalize(() => {
        this.location.replaceState(window.location.pathname);
      })
    );
  }

  getTokenDetailsFromCognito(code: string): Observable<any | null> {
    return this.awsCognitoService.getTokenDetailsFromCognito(code).pipe(
      switchMap((response: any) => {
        console.log('Response: ', response);

        localStorage.setItem('access-token', response.access_token);
        localStorage.setItem('refresh-token', response.refresh_token);

        if (response) {
          this.router.navigate(['dashboard']);
        }

        return of(response);
      }),
      catchError ((error) => {
        return error;
      })
    );
  }
}
