import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
  HttpEvent,
  HttpResponseBase,
  HttpResponse,
  HttpClient
} from '@angular/common/http';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { mergeMap, catchError, filter, take, switchMap } from 'rxjs/operators';

const CODEMESSAGE = {
  200: 'The server successfully returned the requested data.',
  201: 'New or modified data was successful.',
  202: 'A request has been queued in the background (asynchronous task).',
  204: 'Data deleted successfully.',
  400: 'There was an error in the request, and the server did not create or modify data.',
  401: 'The user does not have permissions (token, username, password incorrect).',
  403: 'The user is authorized, but access is prohibited.',
  404: 'The request was made for a record that does not exist, and the server did not perform an operation.',
  406: 'The requested format is not available.',
  410: 'The requested resource is permanently deleted and is no longer available.',
  422: 'When creating an object, a validation error occurred.',
  500: 'A server error occurred. Please check the server.',
  502: 'Gateway error.',
  503: 'The service is unavailable and the server is temporarily overloaded or maintained.',
  504: 'Gateway timed out.',
};

/**
 * Default HTTP interceptor, see its registration details`app.module.ts`
 */
@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) { }
  private notify = 0;
  private AUTH_HEADER = 'Authorization';
  private token = 'secrettoken';
  private refreshTokenInProgress = false;

  private get notification() {
    return this.injector.get();
  }

  private goTo(url: string) {
    setTimeout(() => this.injector.get(Router).navigateByUrl(url));
  }

  private checkStatus(ev: any) {
    if ((ev.status >= 200 && ev.status < 300) || ev.status === 401) {
      return;
    }
    const errortext = ev.error.error ? ev.error.error : 'Internet Connection Error !'; // CODEMESSAGE[ev.status] || ev.statusText;
    this.notify = this.notify + 1;
    if (this.notify === 1) {
      console.log(`Request error :`, errortext);
      // this.notification.error(`Request error :`, errortext);
    }
  }

  private handleData(ev): Observable<any> {
    if (ev.status > 0) {
      this.injector.get(HttpClient);
    }

    this.checkStatus(ev);

    // Business processing: some common operations
    switch (ev.status) {
      case 200:
       
        break;
      case 403:
      case 404:
      case 500:
        // this.goTo(`/exception/${ev.status}`);
        break;
      default:
        if (ev instanceof HttpErrorResponse) {
          // console.warn('Unknown errors, mostly due to backends that do not support CORS or invalid configuration', ev);
        }
        break;
    }
    if (ev instanceof HttpErrorResponse) {
      // this.notification.error(ev.statusText, ``);
      return throwError(ev);
    } else {
      return of(ev);
    }
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.headers.has('Content-Type')) {
      req = req.clone({
        headers: req.headers.set('Content-Type', 'application/json'),
      });
    }

    // req = this.addAuthenticationToken(req);
    return next.handle(req).pipe(
      mergeMap((event: any) => {
        // Allows unified request error handling
        if (event instanceof HttpResponseBase) return this.handleData(event);
        // If everything is OK, follow up
        return of(event);
      }),
      catchError((err: HttpErrorResponse) => this.handleData(err)),
    );
  }
}
