// DEPENDENCIES
import { Component, OnInit } from '@angular/core';

// PROVIDERS
import { UserService } from './../../services/user/user.service';
import { Router } from '@angular/router';

// JSON CLASSES & INTERFACES
import { ServerMessage } from './../../classes/server-message';
import { WebCamComponent } from 'ack-angular-webcam';

@Component({
  selector: 'app-log-reg',
  templateUrl: './log-reg.component.html',
  styleUrls: ['./log-reg.component.css']
})
export class LogRegComponent implements OnInit {
  webcam: WebCamComponent; // will be populated by <ack-webcam [(ref)]="webcam">

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit() {
  }

}
