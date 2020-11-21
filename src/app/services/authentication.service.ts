import { Injectable, Inject } from '@angular/core';
import createAuth0Client from '@auth0/auth0-spa-js';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';

import {
  from,
  of,
  Observable,
  BehaviorSubject,
  combineLatest,
  throwError,
} from 'rxjs';
import { tap, catchError, concatMap, shareReplay } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { User } from '../models/usuario';
import { Admin } from '../models/admins';

@Injectable({
  providedIn: 'root', // toda la aplicacion
})
export class AuthService {
  user_for_db = {};
  user_type;

  usuarios: User[] = [];

  endpoint ="http://localhost:8080"

  auth0Client$ = (from(
    createAuth0Client({
      domain: 'dev-f9sl6vhc.us.auth0.com',
      client_id: 'jU9t08iKRqk8mAmLRPqB2R0hrRUgIvXp', 
      redirect_uri: '${window.location.origin}',
      audience: `https://dev-f9sl6vhc.us.auth0.com/api/v2/`,
      
    })
  ) as Observable<Auth0Client>).pipe(
    shareReplay(1),
    catchError((err) => throwError(err))
  );

  // When calling, options can be passed if desired
  // https://auth0.github.io/auth0-spa-js/classes/auth0client.html#gettokensilently
  getTokenSilently$(options?): Observable<string> {
    return this.auth0Client$.pipe(
      concatMap((client: Auth0Client) => from(client.getTokenSilently(options)))
    );
  }
  isAuthenticated$ = this.auth0Client$.pipe(
    concatMap((client: Auth0Client) => from(client.isAuthenticated())),
    tap((res) => (this.loggedIn = res))
  );
  handleRedirectCallback$ = this.auth0Client$.pipe(
    concatMap((client: Auth0Client) => from(client.handleRedirectCallback()))
  );
  // Create subject and public observable of user profile data
  private userProfileSubject$ = new BehaviorSubject<any>(null);
  userProfile$ = this.userProfileSubject$.asObservable();
  // Create a local property for login status
  loggedIn: boolean = null;

  constructor( private router: Router, private http: HttpClient) {

    
    // On initial load, check authentication state with authorization server
    // Set up local auth streams if user is already authenticated
    this.localAuthSetup();
    // Handle redirect from Auth0 login
    this.handleAuthCallback();
  }

  // When calling, options can be passed if desired
  // https://auth0.github.io/auth0-spa-js/classes/auth0client.html#getuser
  getUser$(options?): Observable<any> {
    return this.auth0Client$.pipe(
      concatMap((client: Auth0Client) => from(client.getUser(options))),
      tap((user) => this.userProfileSubject$.next(user))
    );
  }

  

  private localAuthSetup() {
    // This should only be called on app initialization
    // Set up local authentication streams
    const checkAuth$ = this.isAuthenticated$.pipe(
      concatMap((loggedIn: boolean) => {
        if (loggedIn) {
          // If authenticated, get user and set in app
          // NOTE: you could pass options here if needed
          return this.getUser$();
        }
        // If not authenticated, return stream that emits 'false'
        return of(loggedIn);
      })
    );
    checkAuth$.subscribe();
  }

  login(redirectPath: string = '/') {
    // A desired redirect path can be passed to login method
    // (e.g., from a route guard)
    // Ensure Auth0 client instance exists
    this.auth0Client$.subscribe((client: Auth0Client) => {
      // Call method to log in
      client.loginWithRedirect({
        redirect_uri: `${window.location.origin}`,
        appState: { target: redirectPath },
      });
    });
  }

  private handleAuthCallback() {
    // Call when app reloads after user logs in with Auth0
    const params = window.location.search;
    if (params.includes('code=') && params.includes('state=')) {
      let targetRoute: string; // Path to redirect to after login processsed
      const authComplete$ = this.handleRedirectCallback$.pipe(
        // Have client, now call method to handle auth callback redirect
        tap((cbRes) => {
          // Get and set target redirect route from callback results
          targetRoute =
            cbRes.appState && cbRes.appState.target
              ? cbRes.appState.target
              : '/find';
        }),
        concatMap(() => {
          // Redirect callback complete; get user and login status
          return combineLatest([this.getUser$(), this.isAuthenticated$]);
        })
      );
      // Subscribe to authentication completion observable
      // Response will be an array of user and login status
      authComplete$.subscribe(([user, loggedIn]) => { 
         //Redirect to target route after callback processing
         console.log('USER------>'); 
         this.user_type = 'usuario'; 
         targetRoute = '/super-admin'; 
         if ( user.sub == 'google-oauth2|105854856876566974261' || user.sub == 'google-oauth2|116516268418492091431' || user.sub == 'google-oauth2|101979597602794059430' ) { 
           this.user_type = 'usuario';
            targetRoute = '/super-admin'; 
          } 
          this.user_for_db = { 
            nombre: user.nombre,  
            correo: user.correo, 
            pw: user.pw,
            type: this.user_type, 
            sub: user.sub,
          }; 
          // //mandar a DB 
          this.router.navigate([targetRoute]); 
          this.http
            .post(this.endpoint + '/api/usuarios', this.user_for_db).subscribe((error) => console.log(error)); });
    }
  }

  logout() {
    // Ensure Auth0 client instance exists
    this.auth0Client$.subscribe((client: Auth0Client) => {
      // Call method to log out
      client.logout({
        client_id: 'jU9t08iKRqk8mAmLRPqB2R0hrRUgIvXp',
        returnTo: 'http://localhost:4200/home',
      });
    });
  }
}