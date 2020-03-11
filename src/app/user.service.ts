import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { tap, delay } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UserService {
  isLoggedIn: boolean = false;
  redirectUrl: string = "";

  constructor() {}

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => (this.isLoggedIn = true))
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
