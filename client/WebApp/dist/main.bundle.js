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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_log_reg_log_reg_component__ = __webpack_require__("../../../../../src/app/components/log-reg/log-reg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// MODULES


// COMPONENTS


var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_2__components_log_reg_log_reg_component__["a" /* LogRegComponent */],
    },
    {
        path: 'dashboard',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__["a" /* DashboardComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ack_angular_webcam__ = __webpack_require__("../../../../ack-angular-webcam/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ack_angular_webcam___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ack_angular_webcam__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_log_reg_login_login_component__ = __webpack_require__("../../../../../src/app/components/log-reg/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_log_reg_log_reg_component__ = __webpack_require__("../../../../../src/app/components/log-reg/log-reg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// MODULES





 // importing ack-webcam 
// COMPONENTS




// PROVIDERS


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_log_reg_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_log_reg_log_reg_component__["a" /* LogRegComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ack_angular_webcam__["WebCamModule"] // ack-webcam
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__services_user_user_service__["a" /* UserService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/classes/login-container.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginContainer; });
var LoginContainer = /** @class */ (function () {
    function LoginContainer() {
    }
    return LoginContainer;
}());



/***/ }),

/***/ "../../../../../src/app/classes/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/**
 * base user class that implements base IUser
 */
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// DEPENDENCIES

// PROVIDERS


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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__["a" /* UserService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



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

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <app-login [webcam]='webcam'></app-login>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/log-reg/log-reg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogRegComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// DEPENDENCIES

// PROVIDERS


var LogRegComponent = /** @class */ (function () {
    function LogRegComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    LogRegComponent.prototype.ngOnInit = function () {
    };
    LogRegComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-reg',
            template: __webpack_require__("../../../../../src/app/components/log-reg/log-reg.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/log-reg/log-reg.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LogRegComponent);
    return LogRegComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/log-reg/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".web-size {\n    width: 500px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/log-reg/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center align-text-center\">\n  <h1 class=\"display-3\">Face Login</h1>\n\n  <form class=\"form-group mt-2\">\n    <ack-webcam [(ref)]=\"webcam\" [options]=\"options\" (success)=\"onCamSuccess($event)\" (catch)=\"onCamError($event)\" class=\"web-size\"></ack-webcam>\n    <br>\n    <h4>{{serverMessage}}{{dots}}</h4>\n    <label for=\"name\">Name</label>\n    <input type=\"text\" placeholder=\"\" name=\"name\" class=\"form-control\" required [(ngModel)]='user.name' #name='ngModel'>\n    <div class=\"text-danger\" *ngIf='name.errors && name.touched && name.dirty'>\n      <span *ngIf='name.errors.required'> * Name is required</span>\n    </div>\n    <br><button class=\"btn btn-primary btn-block btn-large\" (click)=\"submitName()\" *ngIf='!(name.errors)'>Submit Name</button>\n    <br><button class=\"btn btn-primary btn-block btn-large\" (click)=\"rawLogin()\" *ngIf='!(name.errors)'>Dev Login</button>\n  </form>"

/***/ }),

/***/ "../../../../../src/app/components/log-reg/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_user__ = __webpack_require__("../../../../../src/app/classes/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_timers__ = __webpack_require__("../../../../timers-browserify/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_timers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_timers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classes_login_container__ = __webpack_require__("../../../../../src/app/classes/login-container.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// DEPENDENCIES


// PROVIDERS


// JSON CLASSES & INTERFACES




var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, _router, _userService) {
        this.http = http;
        this._router = _router;
        this._userService = _userService;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__classes_user__["a" /* User */]();
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
        var id = Object(__WEBPACK_IMPORTED_MODULE_5_timers__["setInterval"])(function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_5_timers__["clearInterval"])(idDots);
        this.dots = '';
        idDots = this.dotify();
        this._userService.submitName(this.user, function (res) {
            var loginContainer = new __WEBPACK_IMPORTED_MODULE_6__classes_login_container__["a" /* LoginContainer */]();
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
                            Object(__WEBPACK_IMPORTED_MODULE_5_timers__["clearInterval"])(idDots);
                            _this.dots = '';
                            _this.serverMessage = 'failed try again?';
                        }
                    });
                });
            }
            else {
                var c_1 = 6;
                var id_1 = Object(__WEBPACK_IMPORTED_MODULE_5_timers__["setInterval"])(function () {
                    if (c_1 <= 1) {
                        Object(__WEBPACK_IMPORTED_MODULE_5_timers__["clearInterval"])(id_1);
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
                    _this._userService.newUser(loginContainer, function (res) {
                        if (res.success) {
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
        var id = Object(__WEBPACK_IMPORTED_MODULE_5_timers__["setInterval"])(function () {
            _this._getBase64(function (base) {
                if (size <= 0) {
                    Object(__WEBPACK_IMPORTED_MODULE_5_timers__["clearInterval"])(id);
                    callback(a);
                }
                else {
                    size--;
                    a.push(base);
                }
            });
        }, 200);
    };
    LoginComponent.prototype.rawLogin = function () {
        var _this = this;
        this._userService.loginRaw(this.user, function (res) {
            if (res.success) {
                _this._router.navigate(['dashboard']);
            }
            else {
                _this.serverMessage = 'dev login failed, check logs';
            }
        });
    };
    LoginComponent.prototype.onCamError = function (err) { };
    LoginComponent.prototype.onCamSuccess = function () {
        var _this = this;
        this._userService.ensureUserIsLoggedIn(function (res) {
            // if the user is currently logged in the user should be sent
            // to the main app
            if (res.success) {
                _this._router.navigate(['dashboard']);
            }
            else {
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "webcam", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/log-reg/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/log-reg/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__["a" /* UserService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_build_url__ = __webpack_require__("../../../../build-url/dist/build-url.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_build_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_build_url__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Rxjs__ = __webpack_require__("../../../../Rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_Rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// INJECTIONS


// SERVICE DEPENDENCIES


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
        this.loggedUser = new __WEBPACK_IMPORTED_MODULE_3_Rxjs__["BehaviorSubject"](null);
    }
    /**
     * build a uri based on the current classes requests
     * @param query uri query location on local hostname
     * @returns {string} uri location
     */
    UserService.prototype._localAPIBuild = function (query) {
        return __WEBPACK_IMPORTED_MODULE_2_build_url__('', {
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
    UserService.prototype.loginRaw = function (user, callback) {
        var _this = this;
        var uri = this._localAPIBuild('dev/login');
        this._http.post(uri, user).subscribe(function (response) {
            if (response.success) {
                _this.loggedUser.next(response.output);
            }
            callback(response);
        });
    };
    /**
     * verifies a user to the backend
     * @param container user name and images array to be sent to the backend
     * @param callback call passes backend results
     */
    UserService.prototype.verifyUser = function (container, callback) {
        var _this = this;
        var uri = this._localAPIBuild("verify");
        this._http.post(uri, container).subscribe(function (response) {
            if (response.success) {
                _this.loggedUser.next(response.output);
            }
            callback(response);
        });
    };
    /**
     * adds a new user to the backend
     * @param container user name and images array to be sent to the backend
     * @param callback call passes backend results
     */
    UserService.prototype.newUser = function (container, callback) {
        var _this = this;
        var uri = this._localAPIBuild("add-user");
        this._http.post(uri, container).subscribe(function (response) {
            if (response.success) {
                _this.loggedUser.next(response.output);
            }
            callback(response);
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map