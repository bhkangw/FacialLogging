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
  count: number;
  constructor(public http: Http, private _router: Router, private _userService: UserService) {
    this.user = new User();
    this.serverMessage = '';
    this.count = 0;
  }

  submitName() {
    console.log(this.user)
    this._userService.submitName(this.user, (res) => {
      const loginContainer = new LoginContainer();
      loginContainer.name = this.user.name;
      if (res.success) {
        this.getImages(5, (images) => {
          loginContainer.images = images;
          this._userService.verifyUser(loginContainer, (res) => {
            console.log('verified', JSON.stringify(res, null, 4));
          });
        })
      } else {
        this.getImages(25, (images) => {
          loginContainer.images = images;
          this._userService.newUser(loginContainer, (res) => {
            console.log('verified', JSON.stringify(res, null, 4));
          });
        })
      }
    })
  }


  private _getBase64(callback: (base: string) => void): void {
    this.webcam.getBase64().then(base => {
      callback(base);
    }).catch((err) => {
      throw err;
    });
  }

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

  genBase64() {
    const loginData = new LoginContainer();
    loginData.name = this.user.name;
    this.getImages(10, (images) => {
      loginData.images = images;
    });
  }

  // genBase64() {
  //   this.webcam.getBase64()
  //     .then(base => {
  //       console.log(base);
  //       // this._userService.sendJson({data: base});
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

  // login() {
  //   this._userService.loginUser(this.user, (res) => {

  //     // if the login was successful continue to the dashboard
  //     // else display the response the backend gave
  //     if (res.success) {
  //       this._router.navigate(['dashboard']);
  //     } else {
  //       this.serverMessage = res.output.message;
  //     }
  //   });
  // }

}
