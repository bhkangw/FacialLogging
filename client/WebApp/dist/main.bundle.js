webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// MODULES
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
// COMPONENTS
var log_reg_component_1 = __webpack_require__("../../../../../src/app/components/log-reg/log-reg.component.ts");
var dashboard_component_1 = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: log_reg_component_1.LogRegComponent,
    },
    {
        path: 'dashboard',
        pathMatch: 'full',
        component: dashboard_component_1.DashboardComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// MODULES
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var ack_angular_webcam_1 = __webpack_require__("../../../../ack-angular-webcam/index.js"); // importing ack-webcam 
// COMPONENTS
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/components/log-reg/login/login.component.ts");
var log_reg_component_1 = __webpack_require__("../../../../../src/app/components/log-reg/log-reg.component.ts");
var dashboard_component_1 = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
// PROVIDERS
var user_service_1 = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
var http_2 = __webpack_require__("../../../http/esm5/http.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                log_reg_component_1.LogRegComponent,
                dashboard_component_1.DashboardComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                http_2.HttpModule,
                forms_1.FormsModule,
                ack_angular_webcam_1.WebCamModule // ack-webcam
            ],
            providers: [user_service_1.UserService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/classes/login-container.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LoginContainer = /** @class */ (function () {
    function LoginContainer() {
    }
    return LoginContainer;
}());
exports.LoginContainer = LoginContainer;


/***/ }),

/***/ "../../../../../src/app/classes/user.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * base user class that implements base IUser
 */
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
exports.User = User;


/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-danger\" (click)='logout()'>Logout</button>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// DEPENDENCIES
var core_1 = __webpack_require__("../../../core/esm5/core.js");
// PROVIDERS
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.ensureUserIsLoggedIn(function (res) {
            if (!res.success) {
                _this._router.navigateByUrl('/');
            }
        });
    };
    DashboardComponent.prototype.logout = function () {
        var _this = this;
        // this will attempt to navigate to login reg regardless
        // of response. Login reg component can handle this
        this._userService.logoutUser(function (response) {
            _this._router.navigate(['']);
        });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "../../../../../src/app/components/log-reg/log-reg.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/log-reg/log-reg.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-login></app-login>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/log-reg/log-reg.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// DEPENDENCIES
var core_1 = __webpack_require__("../../../core/esm5/core.js");
// PROVIDERS
var user_service_1 = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var LogRegComponent = /** @class */ (function () {
    function LogRegComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    LogRegComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.ensureUserIsLoggedIn(function (res) {
            // if the user is currently logged in the user should be sent
            // to the main app
            if (res.success) {
                _this._router.navigate(['dashboard']);
            }
        });
    };
    LogRegComponent = __decorate([
        core_1.Component({
            selector: 'app-log-reg',
            template: __webpack_require__("../../../../../src/app/components/log-reg/log-reg.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/log-reg/log-reg.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], LogRegComponent);
    return LogRegComponent;
}());
exports.LogRegComponent = LogRegComponent;


/***/ }),

/***/ "../../../../../src/app/components/log-reg/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".web-size {\r\n    width: 500px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/log-reg/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center align-text-center\">\r\n  <h1 class=\"display-3\">Face Login</h1>\r\n\r\n  <form class=\"form-group mt-2\">\r\n    <ack-webcam [(ref)]=\"webcam\" [options]=\"options\" (success)=\"onCamSuccess($event)\" (catch)=\"onCamError($event)\" class=\"web-size\"></ack-webcam>\r\n    <br>\r\n    <h4>{{serverMessage}}{{dots}}</h4>\r\n    <label for=\"name\">Name</label>\r\n    <input type=\"text\" placeholder=\"\" name=\"name\" class=\"form-control\" required [(ngModel)]='user.name' #name='ngModel'>\r\n    <div class=\"text-danger\" *ngIf='name.errors && name.touched && name.dirty'>\r\n      <span *ngIf='name.errors.required'> * Name is required</span>\r\n    </div>\r\n    <br><button class=\"btn btn-primary btn-block btn-large\" (click)=\"submitName()\" *ngIf='!(name.errors)'>Login</button>\r\n  </form>"

/***/ }),

/***/ "../../../../../src/app/components/log-reg/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// DEPENDENCIES
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
// PROVIDERS
var user_service_1 = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
// JSON CLASSES & INTERFACES
var user_1 = __webpack_require__("../../../../../src/app/classes/user.ts");
var timers_1 = __webpack_require__("../../../../timers-browserify/main.js");
var login_container_1 = __webpack_require__("../../../../../src/app/classes/login-container.ts");
var template = "\n<ack-webcam\n  [(ref)]   = \"webcam\"\n  [options] = \"options\"\n  (success) = \"onCamSuccess($event)\"\n  (catch)   = \"onCamError($event)\"\n></ack-webcam>\n<button (click)=\"genBase64()\"> generate base64 </button>\n<button (click)=\"genPostData()\"> generate post data </button>\n";
var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, _router, _userService) {
        this.http = http;
        this._router = _router;
        this._userService = _userService;
        this.user = new user_1.User();
        this.serverMessage = '';
        this.count = 0;
        this.dots = '';
        this.options = {
            width: 500,
            height: 500
        };
    }
    LoginComponent.prototype.dotify = function () {
        var _this = this;
        var c = 0;
        var id = timers_1.setInterval(function () {
            c++;
            var dots = c % 3;
            var tmpStr = '';
            for (var i = 0; i < dots; i++) {
                tmpStr += '.';
            }
            _this.dots = tmpStr;
        }, 800);
        return id;
    };
    /**
     * when a user submits their name, return success or unsuccessful if found
     */
    LoginComponent.prototype.submitName = function () {
        var _this = this;
        var idDots = this.dotify();
        this.serverMessage = 'trying to find you';
        timers_1.clearInterval(idDots);
        this.dots = '';
        idDots = this.dotify();
        this._userService.submitName(this.user, function (res) {
            var loginContainer = new login_container_1.LoginContainer();
            loginContainer.name = _this.user.name;
            console.log(res);
            if (res.success) {
                _this.getImages(5, function (images) {
                    _this.serverMessage = 'verifying its you';
                    loginContainer.images = images;
                    _this._userService.verifyUser(loginContainer, function (data) {
                        console.log('verified', JSON.stringify(data, null, 4));
                        if (data.success) {
                            _this._router.navigate(['dashboard']);
                        }
                        else {
                            timers_1.clearInterval(idDots);
                            _this.dots = '';
                            _this.serverMessage = 'failed try again?';
                        }
                    });
                });
            }
            else {
                var c_1 = 6;
                var id_1 = timers_1.setInterval(function () {
                    if (c_1 <= 1) {
                        timers_1.clearInterval(id_1);
                    }
                    c_1--;
                    if (c_1 <= 1) {
                        _this.serverMessage = "building a personal model for you";
                    }
                    else {
                        _this.serverMessage = "hold still for for " + c_1 + " seconds while we examine you";
                    }
                }, 1000);
                _this.getImages(25, function (images) {
                    loginContainer.images = images;
                    _this._userService.newUser(loginContainer, function (data) {
                        console.log('user added');
                        console.log(data);
                        if (data.success) {
                            _this._router.navigate(['dashboard']);
                        }
                    });
                });
            }
        });
    };
    /**
     * generate base64 string from webcam image
     * @param callback get a single base64 image
     */
    LoginComponent.prototype._getBase64 = function (callback) {
        this.webcam.getBase64().then(function (base) {
            callback(base);
        }).catch(function (err) {
            throw err;
        });
    };
    /**
     * take x number of photos at x interval and push base64 strings into images array
     * @param size number of photos to take
     * @param callback get array of photos
     */
    LoginComponent.prototype.getImages = function (size, callback) {
        var _this = this;
        var a = [];
        var id = timers_1.setInterval(function () {
            _this._getBase64(function (base) {
                if (size <= 0) {
                    timers_1.clearInterval(id);
                    callback(a);
                }
                else {
                    size--;
                    a.push(base);
                }
            });
        }, 200);
    };
    LoginComponent.prototype.onCamError = function (err) { };
    LoginComponent.prototype.onCamSuccess = function () { };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/log-reg/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/log-reg/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.Http, router_1.Router, user_service_1.UserService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "../../../../../src/app/services/user/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// INJECTIONS
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
// SERVICE DEPENDENCIES
var uriBuilder = __webpack_require__("../../../../build-url/dist/build-url.js");
/**
 * User Service class is used to do api classes to the backend
 * Contains User data and other information
 */
var UserService = /** @class */ (function () {
    /**
     * base constructor
     * @param _http injectable
     */
    function UserService(_http) {
        this._http = _http;
    }
    /**
     * build a uri based on the current classes requests
     * @param query uri query location on local hostname
     * @returns {string} uri location
     */
    UserService.prototype._localAPIBuild = function (query) {
        return uriBuilder('', {
            path: "api/exp/" + query
        });
    };
    /**
     * queries the backend if the user is currently logged in or not
     * @param {callback: (res: IServerMessage)} callback callback to run after backend response
     */
    UserService.prototype.ensureUserIsLoggedIn = function (callback) {
        var uri = this._localAPIBuild('is-logged');
        this._http.get(uri).subscribe(function (response) { return callback(response); });
    };
    UserService.prototype.logoutUser = function (callback) {
        var uri = this._localAPIBuild('logout');
        this._http.get(uri).subscribe(function (response) { return callback(response); });
    };
    /**
     * submits a name to the backend
     * @param user user data to be sent to the backend
     * @param callback callback passes backend results
     */
    UserService.prototype.submitName = function (user, callback) {
        var uri = this._localAPIBuild("find-user/" + user.name);
        this._http.get(uri).subscribe(function (response) {
            callback(response);
        });
    };
    /**
     * verifies a user to the backend
     * @param container user name and images array to be sent to the backend
     * @param callback call passes backend results
     */
    UserService.prototype.verifyUser = function (container, callback) {
        var uri = this._localAPIBuild("verify");
        this._http.post(uri, container).subscribe(function (response) {
            callback(response);
        });
    };
    /**
     * adds a new user to the backend
     * @param container user name and images array to be sent to the backend
     * @param callback call passes backend results
     */
    UserService.prototype.newUser = function (container, callback) {
        var uri = this._localAPIBuild("add-user");
        this._http.post(uri, container).subscribe(function (response) {
            callback(response);
        });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map