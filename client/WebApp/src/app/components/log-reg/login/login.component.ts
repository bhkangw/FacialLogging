// DEPENDENCIES
import { Component, OnInit } from '@angular/core';
import { WebCamComponent } from 'ack-angular-webcam';
import { Http, Request } from '@angular/http';

// PROVIDERS
import { UserService } from './../../../services/user/user.service';
import { Router } from '@angular/router';

// JSON CLASSES & INTERFACES
import { User } from '../../../classes/user';
import { IUser } from '../../../interfaces/user';

const template = `
<ack-webcam
  [(ref)]   = "webcam"
  [options] = "options"
  (success) = "onCamSuccess($event)"
  (catch)   = "onCamError($event)"
></ack-webcam>
<button (click)="genBase64()"> generate base64 </button>
<button (click)="genPostData()"> generate post data </button>
`

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  webcam: WebCamComponent // will be populated by <ack-webcam [(ref)]="webcam">
  base64: string;
  user: IUser;
  serverMessage: string;

  constructor(public http: Http, private _router: Router, private _userService: UserService) {
    this.user = new User();
    this.serverMessage = '';
  }

  // genBase64() {
  //   this.webcam.getBase64()
  //     .then(base => {
  //       this.base64 = base
  //     })
  //     .catch(e => console.error(e))
  // }

  //get HTML5 FormData object and pretend to post to server
  genPostData() {
    this.webcam.captureAsFormData({ fileName: 'file.jpg' })
      .then(formData => {
        // this._userService.submitUser(user, formData, () => {})
      })
      .catch(e => console.error(e))
      console.log("going through genPostData") // test
  }

  onCamError(err) { }

  onCamSuccess() { }

  ngOnInit() {
  }

  login() {
    this._userService.loginUser(this.user, (res) => {

      // if the login was successful continue to the dashboard
      // else display the response the backend gave
      if (res.success) {
        this._router.navigate(['dashboard']);
      } else {
        this.serverMessage = res.output.message;
      }
    });
  }

}
