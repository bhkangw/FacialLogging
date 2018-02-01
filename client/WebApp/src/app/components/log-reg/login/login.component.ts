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
import { Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() webcam;
  base64: string;
  user: IUser;
  serverMessage: string;
  count: number;
  dots: string;
  options: {};
  constructor(public http: Http, private _router: Router, private _userService: UserService) {
    this.user = new User();
    this.serverMessage = '';
    this.count = 0;
    this.dots = '';
    this.options = {
      width: 500,
      height: 500
    };
  }

  dotify() {
    let c = 0;
    const id = setInterval(() => {
      c++;
      const dots = c % 3;
      let tmpStr = '';
      for (let i = 0; i < dots; i++) {
        tmpStr += '.';
      }
      this.dots = tmpStr;
    }, 800);
    return id;
  }

  /**
   * when a user submits their name, return success or unsuccessful if found
   */
  submitName() {
    let idDots = this.dotify();
    this.serverMessage = 'trying to find you';
    clearInterval(idDots);
    this.dots = '';
    idDots = this.dotify();
    this._userService.submitName(this.user, (res) => {
      const loginContainer = new LoginContainer();
      loginContainer.name = this.user.name;
      console.log(res);
      if (res.success) {
        this.getImages(5, (images) => { // if successful send 5 images for verification
          this.serverMessage = 'verifying its you';
          loginContainer.images = images;
          this._userService.verifyUser(loginContainer, (data) => {
            console.log('verified', JSON.stringify(data, null, 4));
            if (data.success) {
              this._router.navigate(['dashboard']);
            } else {
              clearInterval(idDots);
              this.dots = '';
              this.serverMessage = 'failed try again?';
            }
          });
        });
      } else {
        let c = 6;
        const id = setInterval(() => {
          if (c <= 1) {
            clearInterval(id);
          }
          c--;
          if (c <= 1) {
            this.serverMessage = `building a personal model for you`;
          } else {
            this.serverMessage = `hold still for for ${c} seconds while we examine you`;
          }
        }, 1000);
        this.getImages(25, (images) => { // if unsuccessful send 25 images to add new user
          loginContainer.images = images;
          this._userService.newUser(loginContainer, (res) => {
            if (res.success) {
              this._router.navigate(['dashboard']);
            }
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

  rawLogin() {
    this._userService.loginRaw(this.user, (res) => {
      if (res.success) {
        this._router.navigate(['dashboard']);
      } else {
        this.serverMessage = 'dev login failed, check logs';
      }
    });
  }

  onCamError(err) { }

  onCamSuccess() {
    this._userService.ensureUserIsLoggedIn((res) => {

      // if the user is currently logged in the user should be sent
      // to the main app
      if (res.success) {
        this._router.navigate(['dashboard']);
      } else {
      }
    });
  }

  ngOnInit() {
  }

}
