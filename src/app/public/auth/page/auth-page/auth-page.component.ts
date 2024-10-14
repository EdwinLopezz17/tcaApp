import { Component } from '@angular/core';
import {NgClass} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [
    NgClass,
    RouterLink
  ],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css',
})
export class AuthPageComponent {

  isSignedIn = false;
  isSignedUp = true;

  textButton = "Sign Up";

  constructor() {
  }

  selectedSignIn(): void {
    this.textButton = "Sign In";
    this.isSignedIn = true;
    this.isSignedUp = false;
  }

  selectedSignUp(): void {
    this.textButton = "Sign Up";
    this.isSignedIn = false;
    this.isSignedUp = true;
  }


}
