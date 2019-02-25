import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  dataUser: any;
  private user: SocialUser;
  private loggedIn: boolean;
  constructor(
    private authService: AuthService,
  ) { }
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  ngOnInit() {
  }
  openHome() {
    this.signInWithFB();
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.user.photoUrl = "https://graph.facebook.com/" + this.user.id + "/picture?width=2000&height=2000"
      window.localStorage.setItem('@user', JSON.stringify(this.user));

      this.dataUser = JSON.parse(window.localStorage.getItem('@user'));

      this.loggedIn = (user != null);
    });

  }
}
