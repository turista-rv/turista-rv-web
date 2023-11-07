import { AuthService } from './services/auth.service';
import { Injectable, NgModule } from '@angular/core';
import { HttpEvent,  HttpInterceptor,  HttpHandler,  HttpRequest} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable(
   {
      providedIn: 'root',
    }
)
export class TokenInterceptorService implements HttpInterceptor {
   constructor(private authService: AuthService) {}
   intercept(
     request: HttpRequest<any>,
     next: HttpHandler
   ): Observable<HttpEvent<any>> {
      const token = localStorage.getItem('token');
     if (token) {
       request = request.clone({
         setHeaders: {
           Authorization: `Bearer ${token}`,
         },
       });
     }
     return next.handle(request).pipe(
       catchError((err) => {
       
         const error = err.error.message || err.statusText;
          throw Error(error);
       })
     );
   }
 }
@NgModule({
   providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
   }]
})
export class Interceptor { }