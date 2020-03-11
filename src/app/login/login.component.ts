import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {}

  login(): void {
    this.userService.login().subscribe(() => {
      if (this.userService.isLoggedIn) {
        this.router.navigate(["dashboard"]);
      }
    });
  }
}
