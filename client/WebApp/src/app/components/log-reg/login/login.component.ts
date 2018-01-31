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
import { setInterval, clearInterval } from 'timers';
import { LoginContainer } from '../../../classes/login-container';
import { IServerMessage } from '../../../interfaces/server-message';

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

  webcam: WebCamComponent; // will be populated by <ack-webcam [(ref)]="webcam">
  base64: string;
  user: IUser;
  serverMessage: string;
  count: number;
  constructor(public http: Http, private _router: Router, private _userService: UserService) {
    this.user = new User();
    this.serverMessage = '';
    this.count = 0;
  }

  /**
   * when a user submits their name, return success or unsuccessful if found
   */
  submitName() {
    this._userService.submitName(this.user, (res) => {
      const loginContainer = new LoginContainer();
      loginContainer.name = this.user.name;
      if (res.success) {
        this.getImages(5, (images) => { // if successful send 5 images for verification
          loginContainer.images = images;
          this._userService.verifyUser(loginContainer, (res) => {
            this._router.navigate(['dashboard']);
            console.log('verified', JSON.stringify(res, null, 4));
          });
        })
      } else {
        this.getImages(25, (images) => { // if unsuccessful send 25 images to add new user
          loginContainer.images = images;
          this._userService.newUser(loginContainer, (res) => {
            if(res.success){
              this._router.navigate(['dashboard']);
            }
            console.log('verified', JSON.stringify(res, null, 4));
          });
        });
      }
    });
  }

  /**
   * generate base64 string from webcam image
   * @param callback get a single base64 image
   */
  private _getBase64(callback: (base: string) => void): void {
    this.webcam.getBase64().then(base => {
      callback(base);
    }).catch((err) => {
      throw err;
    });
  }

  /**
   * take x number of photos at x interval and push base64 strings into images array
   * @param size number of photos to take
   * @param callback get array of photos
   */
  getImages(size: number, callback: (images: Array<string>) => void): void {
    let a = [];
    const id = setInterval(() => {
      this._getBase64((base) => {
        if (size <= 0) {
          clearInterval(id);
          callback(a);
        } else {
          size--;
          a.push(base);
        }
      });
    }, 200);
  }

  onCamError(err) { }

  onCamSuccess() { }

  ngOnInit() {
  }

}
