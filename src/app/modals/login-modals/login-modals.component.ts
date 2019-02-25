import { Component, OnInit } from '@angular/core';
import { SocialUser, AuthService, FacebookLoginProvider } from 'angularx-social-login';
import { MatDialogRef, MatDialog } from '@angular/material';

@Component({
  selector: 'app-login-modals',
  templateUrl: './login-modals.component.html',
  styleUrls: ['./login-modals.component.scss']
})
export class LoginModalsComponent implements OnInit {

  dataUser: any;
  private user: SocialUser;
  private loggedIn: boolean;
  constructor(
    private authService: AuthService,
    private thisDialogRef: MatDialogRef<LoginModalsComponent>,
    public dialog: MatDialog,
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
      this.thisDialogRef.close('close');
    });

  }
}
