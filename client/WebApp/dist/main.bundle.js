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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_log_reg_registration_registration_component__ = __webpack_require__("../../../../../src/app/components/log-reg/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_log_reg_log_reg_component__ = __webpack_require__("../../../../../src/app/components/log-reg/log-reg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
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
                __WEBPACK_IMPORTED_MODULE_8__components_log_reg_registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_log_reg_log_reg_component__["a" /* LogRegComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ack_angular_webcam__["WebCamModule"] // ack-webcam
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_user_user_service__["a" /* UserService */]],
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

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <app-registration></app-registration>\n    <app-login></app-login>\n  </div>\n</div>"

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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/log-reg/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col text-center\">\r\n  <h1 class=\"display-3\">Face Login</h1>\r\n\r\n  <form class=\"form-group mt-2\">\r\n    <ack-webcam [(ref)]=\"webcam\" [options]=\"options\" (success)=\"onCamSuccess($event)\" (catch)=\"onCamError($event)\"></ack-webcam>\r\n    <br>\r\n    <label for=\"name\">Name</label>\r\n    <input type=\"text\" placeholder=\"\" name=\"name\" class=\"form-control\" required [(ngModel)]='user.name' #name='ngModel'>\r\n    <div class=\"text-danger\" *ngIf='name.errors && name.touched && name.dirty'>\r\n      <span *ngIf='name.errors.required'> * Name is required</span>\r\n    </div>\r\n    <br><button class=\"btn btn-primary btn-block btn-large\" (click)=\"submitName()\" *ngIf='!(name.errors)'>Submit Name</button>\r\n  </form>"

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



var template = "\n<ack-webcam\n  [(ref)]   = \"webcam\"\n  [options] = \"options\"\n  (success) = \"onCamSuccess($event)\"\n  (catch)   = \"onCamError($event)\"\n></ack-webcam>\n<button (click)=\"genBase64()\"> generate base64 </button>\n<button (click)=\"genPostData()\"> generate post data </button>\n";
var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, _router, _userService) {
        this.http = http;
        this._router = _router;
        this._userService = _userService;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__classes_user__["a" /* User */]();
        this.serverMessage = '';
        this.count = 0;
    }
    LoginComponent.prototype.submitName = function () {
        var _this = this;
        this._userService.submitName(this.user, function (res) {
            var loginContainer = new __WEBPACK_IMPORTED_MODULE_6__classes_login_container__["a" /* LoginContainer */]();
            loginContainer.name = _this.user.name;
            if (res.success) {
                _this.getImages(5, function (images) {
                    loginContainer.images = images;
                    _this._userService.verifyUser(loginContainer, function (data) {
                        console.log('verified', JSON.stringify(res, null, 4));
                    });
                });
            }
            else {
                _this.getImages(25, function (images) {
                    loginContainer.images = images;
                    _this._userService.newUser(loginContainer, function (data) {
                        console.log('verified', JSON.stringify(res, null, 4));
                    });
                });
            }
        });
    };
    LoginComponent.prototype._getBase64 = function (callback) {
        this.webcam.getBase64().then(function (base) {
            callback(base);
        }).catch(function (err) {
            throw err;
        });
    };
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
    LoginComponent.prototype.genBase64 = function () {
        var loginData = new __WEBPACK_IMPORTED_MODULE_6__classes_login_container__["a" /* LoginContainer */]();
        loginData.name = this.user.name;
        this.getImages(10, function (images) {
            loginData.images = images;
        });
    };
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
    LoginComponent.prototype.genPostData = function () {
        this.webcam.captureAsFormData({ fileName: 'file.jpg' })
            .then(function (formData) {
            // this._userService.submitUser(user, formData, () => {})
        })
            .catch(function (e) { return console.error(e); });
        console.log("going through genPostData"); // test
    };
    LoginComponent.prototype.onCamError = function (err) { };
    LoginComponent.prototype.onCamSuccess = function () { };
    LoginComponent.prototype.ngOnInit = function () {
    };
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

/***/ "../../../../../src/app/components/log-reg/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fixed{\r\n    width: 363px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/log-reg/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"col fixed\">\r\n    <h1 class=\"display-3\">Register</h1>\r\n    <form class=\"form-group ml-2 mt-2\">\r\n        <label for=\"firstName\">First Name</label>\r\n        <input \r\n          class=\"form-control\"\r\n          type=\"text\" \r\n          name=\"firstName\" \r\n          required\r\n          minlength=\"3\"\r\n          maxlength=\"255\"\r\n          [(ngModel)]='user.firstName'\r\n          #firstName='ngModel'>\r\n        <div \r\n          class=\"text-danger\" \r\n          *ngIf='firstName.errors && firstName.touched && firstName.dirty'>\r\n            *\r\n            <span *ngIf='firstName.errors.required'>First name is required</span>\r\n            <span *ngIf='firstName.errors.minlength'>First name must be longer than 3 characters</span>\r\n        </div>\r\n        <label for=\"lastName\">Last Name</label>\r\n        <input \r\n        class=\"form-control\"\r\n        type=\"text\" \r\n        name=\"lastName\" \r\n        required\r\n        minlength=\"3\"\r\n        maxlength=\"255\"\r\n        [(ngModel)]='user.lastName'\r\n        #lastName='ngModel'>\r\n        <div \r\n        class=\"text-danger\" \r\n        *ngIf='lastName.errors && lastName.touched && lastName.dirty'>\r\n        *\r\n        <span *ngIf='lastName.errors.required'>Last name is required</span>\r\n        <span *ngIf='lastName.errors.minlength'>Last name must be longer than 3 characters</span>\r\n      </div>\r\n      <label for=\"email\">Email</label>\r\n      <input \r\n          class=\"form-control\"\r\n          type=\"text\" \r\n          name=\"email\" \r\n          required\r\n          pattern=\"[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z]+$\"\r\n          maxlength=\"255\"\r\n          [(ngModel)]='user.email'\r\n          #email='ngModel'>\r\n        <div \r\n        class=\"text-danger\" \r\n          *ngIf='email.errors && email.touched && email.dirty'>\r\n            *\r\n            <span *ngIf='email.errors.required'>Email is required</span>\r\n            <span *ngIf='email.errors.pattern'>Email entered is invalid</span>\r\n        </div>\r\n        <div class=\"text-danger\">\r\n          <span *ngIf='serverMessage != \"\"'>*{{serverMessage}}</span>\r\n        </div>\r\n        <label for=\"password\">Password</label>\r\n        <input \r\n        class=\"form-control\"\r\n        type=\"text\" \r\n        name=\"password\" \r\n        required\r\n        pattern=\"^[A-Za-z\\d$@$!%*?&]{4,}$\"\r\n        maxlength=\"255\"\r\n        [(ngModel)]='user.password'\r\n        #password='ngModel'>\r\n        <div \r\n          class=\"text-danger\" \r\n          *ngIf='password.errors && password.touched && password.dirty'>\r\n            *\r\n            <span *ngIf='password.errors.required'>Password is required</span>\r\n            <span *ngIf='password.errors.pattern'>Password entered is invalid</span>\r\n        </div>\r\n        <label for=\"confirmPassword\">Confirm Password</label>\r\n        <input \r\n        class=\"form-control\"\r\n        type=\"text\" \r\n        name=\"confirmPassword\"\r\n        required \r\n        pattern=\"{{user.password}}\"\r\n        [(ngModel)]='user.confirmPassword'\r\n        #confirmPassword='ngModel'>\r\n        <div \r\n          class=\"text-danger\" \r\n          *ngIf='confirmPassword.errors && confirmPassword.touched && confirmPassword.dirty'>\r\n            *\r\n            <span *ngIf='confirmPassword.errors.pattern'>Passwords do not match</span>\r\n        </div>\r\n      </form>\r\n      \r\n      <button \r\n        (click)='registerUser()' \r\n        class=\"btn btn-success float-right\"\r\n        *ngIf='!(firstName.errors || lastName.errors || email.errors || password.errors || confirmPassword.errors)'>Register</button>\r\n</div> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/log-reg/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_user__ = __webpack_require__("../../../../../src/app/classes/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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


var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__classes_user__["a" /* User */]();
        this.serverMessage = '';
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__("../../../../../src/app/components/log-reg/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/log-reg/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], RegistrationComponent);
    return RegistrationComponent;
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
    UserService.prototype.submitName = function (user, callback) {
        var uri = this._localAPIBuild("find-user/" + user.name);
        this._http.get(uri).subscribe(function (response) {
            callback(response);
        });
    };
    UserService.prototype.verifyUser = function (container, callback) {
        var uri = this._localAPIBuild("verify");
        this._http.post(uri, container).subscribe(function (response) {
        });
    };
    UserService.prototype.newUser = function (container, callback) {
        var uri = this._localAPIBuild("add-user");
        this._http.post(uri, container).subscribe(function (response) {
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