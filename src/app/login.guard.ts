import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "./user.service";

@Injectable({
  providedIn: "root"
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(): boolean {
    return true;
  }

  canActivateChild(state: RouterStateSnapshot) {
    //return true;

    if (this.userService.isLoggedIn) {
      return true;
    }

    this.userService.redirectUrl = state.url;
    this.router.navigate(["/login"]);

    return false;
  }
}
