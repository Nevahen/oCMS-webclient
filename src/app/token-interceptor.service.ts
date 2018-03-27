import { Injectable } from '@angular/core';
import { AuthGuardService } from './auth-guard.service';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private auth: AuthGuardService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{

    request = request.clone({
      setHeaders:{
        Authorization: `Bearer ${this.auth.getToken()}`
     }
    })

    return next.handle(request)
  }
}
