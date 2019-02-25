(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/forgot/forgot.component */ "./src/app/pages/forgot/forgot.component.ts");
/* harmony import */ var _pages_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/product-detail/product-detail.component */ "./src/app/pages/product-detail/product-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    { path: "home", component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: "login", component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: "register", component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: "forgot", component: _pages_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_5__["ForgotComponent"] },
    { path: "product-detail", component: _pages_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_6__["ProductDetailComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- The content below is only a placeholder and can be replaced. -->\r\n<app-header-toolbar></app-header-toolbar>\r\n<div class=\"container\"><router-outlet></router-outlet></div>\r\n<ngx-spinner\r\n  bdColor=\"rgba(51,51,51,0.8)\"\r\n  size=\"medium\"\r\n  color=\"#ff9558\"\r\n  type=\"ball-atom\"\r\n>\r\n  <p style=\"font-size: 14px; color: white; margin-top: 14px;\">กำลังโหลด...</p>\r\n</ngx-spinner>\r\n<footer>\r\n  <div class=\"row mt-5\">\r\n    <div class=\"col-12 text-center\">\r\n      <small color=\"gray\">เวอร์ชั่นปัจจุบัน : 1.0</small>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: provideConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/forgot/forgot.component */ "./src/app/pages/forgot/forgot.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_facebook__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-facebook */ "./node_modules/ngx-facebook/dist/esm/index.js");
/* harmony import */ var _components_header_toolbar_header_toolbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/header-toolbar/header-toolbar.component */ "./src/app/components/header-toolbar/header-toolbar.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ng6_md_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng6-md-auth */ "./node_modules/ng6-md-auth/fesm5/ng6-md-auth.js");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-simple-slideshow */ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.es5.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var _pages_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/product-detail/product-detail.component */ "./src/app/pages/product-detail/product-detail.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _modals_login_modals_login_modals_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modals/login-modals/login-modals.component */ "./src/app/modals/login-modals/login-modals.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var fbLoginOptions = {
    scope: 'pages_messaging,pages_messaging_subscriptions,email,pages_show_list,manage_pages',
    return_scopes: true,
    enable_profile_selector: true,
    auth_type: 'rerequest'
};
var config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_18__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_18__["FacebookLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_18__["FacebookLoginProvider"]("2134431583284588", fbLoginOptions)
    }
]);
function provideConfig() {
    return config;
}
var apiSrvCfg = src_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _pages_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _pages_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_10__["ForgotComponent"],
                _components_header_toolbar_header_toolbar_component__WEBPACK_IMPORTED_MODULE_14__["HeaderToolbarComponent"],
                _pages_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_19__["ProductDetailComponent"],
                _modals_login_modals_login_modals_component__WEBPACK_IMPORTED_MODULE_21__["LoginModalsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_17__["SlideshowModule"],
                angularx_social_login__WEBPACK_IMPORTED_MODULE_18__["SocialLoginModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
                ngx_facebook__WEBPACK_IMPORTED_MODULE_13__["FacebookModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: "never" }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
                ng6_md_auth__WEBPACK_IMPORTED_MODULE_16__["AuthModule"].forRoot(apiSrvCfg)
            ],
            entryComponents: [
                _modals_login_modals_login_modals_component__WEBPACK_IMPORTED_MODULE_21__["LoginModalsComponent"]
            ],
            providers: [
                {
                    provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_18__["AuthServiceConfig"],
                    useFactory: provideConfig
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/header-toolbar/header-toolbar.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/header-toolbar/header-toolbar.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar style=\"background-color: white;border-bottom: solid 1px  #e2e2e2\">\r\n  <mat-toolbar-row class=\"container\">\r\n    <img class=\"app-logo\"\r\n      src=\"https://res.cloudinary.com/dyiuidzsc/image/upload/v1548991271/Rabu%20Rabu/perfect%20lips/LOGO-RABU.png\">\r\n    <span class=\"example-spacer\"></span>\r\n    <span *ngIf=\"userAuth\">\r\n      <mat-icon class=\"example-icon\">notifications</mat-icon>\r\n    </span>\r\n    <span class=\"profile\" *ngIf=\"userAuth\" [matMenuTriggerFor]=\"profile\">\r\n      <img [src]=\"userAuth.profileImageURL\" class=\"img\" alt=\"img\">\r\n      <span class=\"user-name\">{{userAuth.username}}</span>\r\n    </span>\r\n    <mat-menu #profile=\"matMenu\">\r\n      <button name=\"btn-logout\" mat-menu-item (click)=\"onLogout()\">\r\n        <mat-icon>power_settings_new</mat-icon>\r\n        <span>ออกจากระบบ</span>\r\n      </button>\r\n    </mat-menu>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/components/header-toolbar/header-toolbar.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/header-toolbar/header-toolbar.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\n  padding: 0 14px; }\n\n.example-spacer {\n  flex: 1 1 auto; }\n\n.profile {\n  font-size: 1rem !important;\n  margin-right: 1rem;\n  margin-left: 2rem;\n  margin-top: -0.5rem;\n  cursor: pointer; }\n\n.img {\n  width: 24px;\n  height: 24px;\n  border-radius: 100%; }\n\n.user-name {\n  padding-left: 0.5rem; }\n\n.app-logo {\n  height: 38px; }\n"

/***/ }),

/***/ "./src/app/components/header-toolbar/header-toolbar.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/header-toolbar/header-toolbar.component.ts ***!
  \***********************************************************************/
/*! exports provided: HeaderToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderToolbarComponent", function() { return HeaderToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_md_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-md-auth */ "./node_modules/ng6-md-auth/fesm5/ng6-md-auth.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderToolbarComponent = /** @class */ (function () {
    function HeaderToolbarComponent(userAuthSrv, router) {
        var _this = this;
        this.userAuthSrv = userAuthSrv;
        this.router = router;
        this.appName = "" + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].appName;
        this.userAuthSrv.isLoggedIn.subscribe(function (value) {
            _this.userAuth = _this.userAuthSrv.user;
        });
        this.userAuth = this.userAuthSrv.user;
    }
    HeaderToolbarComponent.prototype.onLogout = function () {
        this.userAuthSrv.logout();
        this.router.navigate(["/login"]);
    };
    HeaderToolbarComponent.prototype.ngOnInit = function () { };
    HeaderToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-header-toolbar",
            template: __webpack_require__(/*! ./header-toolbar.component.html */ "./src/app/components/header-toolbar/header-toolbar.component.html"),
            styles: [__webpack_require__(/*! ./header-toolbar.component.scss */ "./src/app/components/header-toolbar/header-toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [ng6_md_auth__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderToolbarComponent);
    return HeaderToolbarComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSnackBarModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSnackBarModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/modals/login-modals/login-modals.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/modals/login-modals/login-modals.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row container pl-0 pr-0 ml-0 mr-0\">\r\n    <div class=\"col-12 btn-center\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"openHome()\"><img class=\"f-icon\" src=\"assets/icons/facebook-f-brands.svg\"><span\r\n                class=\"pl-3\">Login with facebook</span></button>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/modals/login-modals/login-modals.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modals/login-modals/login-modals.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".f-icon {\n  width: 15px; }\n\n.container {\n  height: 16vh;\n  display: flex;\n  align-items: center; }\n\n.btn-center {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/modals/login-modals/login-modals.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modals/login-modals/login-modals.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginModalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModalsComponent", function() { return LoginModalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginModalsComponent = /** @class */ (function () {
    function LoginModalsComponent(authService) {
        this.authService = authService;
    }
    LoginModalsComponent.prototype.signInWithFB = function () {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["FacebookLoginProvider"].PROVIDER_ID);
    };
    LoginModalsComponent.prototype.ngOnInit = function () {
    };
    LoginModalsComponent.prototype.openHome = function () {
        var _this = this;
        this.signInWithFB();
        this.authService.authState.subscribe(function (user) {
            _this.user = user;
            _this.user.photoUrl = "https://graph.facebook.com/" + _this.user.id + "/picture?width=2000&height=2000";
            window.localStorage.setItem('@user', JSON.stringify(_this.user));
            _this.dataUser = JSON.parse(window.localStorage.getItem('@user'));
            _this.loggedIn = (user != null);
        });
    };
    LoginModalsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-modals',
            template: __webpack_require__(/*! ./login-modals.component.html */ "./src/app/modals/login-modals/login-modals.component.html"),
            styles: [__webpack_require__(/*! ./login-modals.component.scss */ "./src/app/modals/login-modals/login-modals.component.scss")]
        }),
        __metadata("design:paramtypes", [angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginModalsComponent);
    return LoginModalsComponent;
}());



/***/ }),

/***/ "./src/app/pages/forgot/forgot.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/forgot/forgot.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  forgot works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/forgot/forgot.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/forgot/forgot.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/forgot/forgot.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/forgot/forgot.component.ts ***!
  \**************************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgotComponent = /** @class */ (function () {
    function ForgotComponent() {
    }
    ForgotComponent.prototype.ngOnInit = function () {
    };
    ForgotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__(/*! ./forgot.component.html */ "./src/app/pages/forgot/forgot.component.html"),
            styles: [__webpack_require__(/*! ./forgot.component.scss */ "./src/app/pages/forgot/forgot.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content mt-4\">\r\n  <div style=\"display:block; width: 100%\">\r\n    <slideshow [imageUrls]=\"images\" [height]=\"'270px'\" [minHeight]=\"\" [showArrows]=\"false\" [autoPlay]=\"true\"\r\n      [autoPlayInterval]=\"5000\" [backgroundSize]=\"'cover'\" [showDots]=\"true\" [dotColor]=\"'#010101'\" [lazyLoad]=\"true\"\r\n      [autoPlayWaitForLazyLoad]=\"true\" [hideOnNoSlides]=\"true\">\r\n    </slideshow>\r\n  </div>\r\n  <div class=\"row pt-2\">\r\n    <div class=\"col-12\">\r\n      <h4 class=\"font-color-title\">สินค้ามาใหม่</h4>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"data\">\r\n    <div class=\"col-4\" *ngFor=\"let item of data\">\r\n      <mat-card class=\"pb-0\" (click)=\"clickToHome()\">\r\n        <img mat-card-image class=\"\" [src]=\"item.image.url\">\r\n        <mat-card-content class=\"mb-0\">\r\n          <p class=\"mb-0\">\r\n            {{item.name}}\r\n          </p>\r\n          <p class=\"mb-0\">\r\n            {{item.price}}\r\n          </p>\r\n          <img class=\"heart-img mb-2 mt-1\"\r\n            src=\"https://res.cloudinary.com/dyiuidzsc/image/upload/v1548908336/web-sharing/icon-heart.png\" alt=\"\">\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-fab {\n  width: 8rem;\n  height: 8rem; }\n  .mat-fab mat-icon {\n    margin-left: -2.5rem;\n    margin-top: -2.5rem;\n    font-size: 4rem; }\n  .home-big-button-svg {\n  display: block;\n  fill: #fff;\n  width: 4rem;\n  height: 4rem; }\n  .green {\n  background-color: #a9c85f !important; }\n  .heart-img {\n  width: 15px; }\n  .prod-img {\n  height: 210px; }\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
        this.images = [
            {
                "url": "https://res.cloudinary.com/dyiuidzsc/image/upload/v1551072806/Rabu%20Rabu/ads%20rabu/set.jpg"
            },
            {
                "url": "https://res.cloudinary.com/dyiuidzsc/image/upload/v1551072803/Rabu%20Rabu/ads%20rabu/powder.jpg"
            },
            {
                "url": "https://res.cloudinary.com/dyiuidzsc/image/upload/v1551072800/Rabu%20Rabu/ads%20rabu/lips.jpg"
            }
        ];
        this.data = [
            {
                name: 'rabu rabu ลิปติกสีเเดง',
                detail: 'รายละเอียด',
                image: {
                    url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEBIVFhUVFxUXFRYVFRUVFRUVFRgWFhUVGBcYHSggGRolHRcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lIB8vLS0tLS0tLS8rKy0rLS8tLS0tKy0tKy0tLS8tLS0tMC0tLy0tLSstLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIFBgcEAwj/xABIEAACAQIDBAcEBgYIBQUAAAABAhEAAwQSIQUGMUEHEyJRYXGBMpGhsSNCUnLB0RQkc4KSshUlM0NjouHwNDVTYsIWg6Oz0v/EABoBAAIDAQEAAAAAAAAAAAAAAAACAQMFBAb/xAAvEQACAgEEAQMBBwQDAAAAAAAAAQIDEQQSITFBBRNRYSJxgbHB0fAjMkKhFDOR/9oADAMBAAIRAxEAPwDu2KP1ez+zT+UVICuLZQ+htfs0/lFe1/FontsB4c/dXO2dUYSk8RWTqFPa4FEsQB3kwKruK28eFpY8W1Pu4VE377OZdix8T8u6q3al0alHpNk+Z8L/AGWTF7woulsZz38F/M1CYzat27ozQPsroPhx9a4qkti7Cv4skWEkD2mY5UHgT3+AqpylLg1q9Lp9NHc/HlkbRUnt7Yd3BuqXihLLmGQkiJjmBUZSNNPDOyuyNkVKLymFTW6WP6rEAE9m52D5n2T79PWoWihPDyRdWrIOD8mwAV6Co3YWP6+wlznEP94aN+frUkK7Fysni5wcJOL8DqUUlOFAgtOWkApRQSOFOFNFOFBA4U8UwU8UAPFOFNFLQA6ikooAKKKSoAKKJooJFoptFAGKf0lcyKinKFAXTiYEca5YJniY1POB3mm1rW56WMRs/IERZVrV3KoBLARmPOSIb1qiEXY+Weo1NsNDWnCHDeCj7mW8Ebj/AKaJygG2CWysZgrlXVjqIHwrrfdZsTjHWyDZtsOtTrVKtkJg5U4wDyMaEVD4HrcLjFCqzXLNyCqgksAYaAO9Z99anvA0Laxia9SQzeNi4ALo9BDfuVbXFSjh+Di1uonTcp1v+9cc8L8CM2XuXgrX0V/LdutmYZmKtkBgZVB0jme+vbZDpgHbB5LjAzetsiFyUJCsGy6ypgT3EVKbVXDWyuNugzaWA4zGFfTVRxGvGNJqg7x75s2JW7g2yhEKBmUEuGIY6MNB2R7qsk4wM+mF+sbTbafeekye362Fhv0Z74XJcWCplpYsw7BBPOT5VmFWjF4DaOMsnE3iWtopdQSFkAalEXThOp7qmOj/AHfw96y1y9ZLOGKy85CCJBUcJ1idapnH3JcLBq6e6Ojoe+W7D6Xj6Gf0VO71bttgmQF86uCQ0RBBgr7o+NQVUyi4vDNam2NsFOD4ZadxNoZbjWWOjjMv3l4j1H8tXsVkGFvtbdXXipBHpWtYTELcRbi8GAI9eVXVSysGB6tRtsVi/wAvzPcU4UwU8VaZA5acKaKcKAB3ABLEAAEkkwABqSSeArPNvdL+DskphkfEsPrKclqfvEEkeIWKmulJyNmYiOagHyJEivmqaeEUxJSaNWudMuMOqYawongS7H35h8q6l6Y8SuUvhLJBGuW6Qf8AyjyrLFtt1YaDlzZZ5ZomPdrTr50HlTbUK5M+kNyd+cPtIMLYa3dQAvbeJAOmZWGjCasO0No2cOhuYi6ltBxZ2Cjy14nwrB+g++V2kV5PYuA/ulCK4el/H3Lm0HW4zFU7KLPZUeA4SeZ50u3nBO7jJp+0OmDZyNls9bfPeiZV99wgnzio1emqyZ/Ur3h20/LSsTwraim2G199TsQbng3vZfTFgbjhL1u7YnTMwV0HmVMgeMVoiOCAQQQQCCNQQdQQe6vj019Ubj3S2zsGx4nD2Z/gUVEo4JjLJN0UUVWMFFFFBJhFXHoz2r1WINlj2bw08LiiR7xI9BVOoBrlhLa8ns9TQr6nW/JsO1t5sDhWdpVrp9oWgC5IAAzNwGgA1NUXaW+t91a1aAtW2LaaM+ViSVzERGp4DhpUBg8DduyLNtngScqkwBrrFW/AdHV49W164gUkG4gnMF4kAxGbl+NX77J9GStNo9JzbLL+v7Hps7fOyuBGHvI1y5la1lGgKcFJY8NDGknSonCbi424mfIiyJCu0MfSNPWrTt/dWwLAxGAAFy0OsQoc6uF15yCdJB8KnsDbxKi3cvMbjtkV0Qqlq2CJZ4OrGfnoAKs9tyeJeDketjTFy03G58p/ousHPuWRbw64dyRdt5ustswLL2uIH2DMjzqPx+8L4bGlHs5MO7IGumSpYpAcGIHBQRr7BNee/OMGGvWMXaZOtWUe2SJuWm11A1gHnykVAbz76ri7BsixlkqSzNOUgz2QB8++plNRWM9Fen0k75+5typ5z9Hnv9iyb9bupfttiQ5D27egkZGAObnziRpx0rKq9GvuQFLsVHBSxyjyHCu23sLEmy1/qmFpRmLHSR3qDqfSuact7ykbukq/4leyyeVnjx+BHVedwtoZrbWCdUOZfusdR6H+aqNXfsPH9RfS5yBhvuNo35+lLB4ZZraPepcfPaNWp4pgPMU5a6jyA8GnAU0U4UAVbpRH9WYj7o/mFfPGzPYvQYhFMjlDV9FdJY/q3E/dH8wr5z2YwC3QTE2+PdBHd51ZArmTO37nZZM4MXycoiR9GBm48JkR4+lRF3gPKpfbuIUh0zAsbweVJylOqVeHmo0PCoe5wp0Ky49DDRtW3427w/yz+FJ0n4YNtK5M+0Bp45j+FeXRC0bVw/j1w/8AhuH8Kkuk1P6xf7yf+U0v+RP+JSsSAEsQmXsGTp2zPHyrhs8ffXfiwMlmDJIuSCSSCG0585+FcMQffTIUaa+oujwEbMwYPEWUHu0r5eYV9O9G9zNszCn/AAx8zSTGgWWiiaKrLAopKKAMJor1xVnIxX1HkdRXlXG1g9zCSnFSXTNI6LNpgpcwzcUOdPFW9oeh1/eqxbM2g/6TiMPfIJWLtowBNl9I8crAj1rI9i7TfDXlvW4lZ0PBgRBB8PyqfXA7R2m4usMqxlDkdWmUmSAPace8eNdNdr2pLswNb6evelZJpRl5fh/QmcHvNYwBv4c/SItwtYFuGGS52ihMwuVp99VvGb44p7bWVYLbMgaAuEPBM/lpMTUntHo7vW7ZdLq3GUTkylSQOOUydfCvDdXd3C3bJxOLvgJOUIHCweAznjJ5AcqH7je3oev/AIMIu3+58ePP3fUfuFsTD4s3DiCzOhByZoUqeBJGp1BHGOFe1vo8uvcujrBbRXItkgsXXiDxECCBPeDU7/6et4G4mLwzN1YhbyE5gbTwC4J17JysfAGrDjsPfa7Ze1dC21LdahE9YpGkHvB+dPGpYxJHHd6hYrXKmX2ZfPjHjH87K3uju3Zt9bZxFlGvodXPaD2rgIV0n2eDL3ytSu7GGcWLmFvqSLTPaVmGlyyRKEHn2THpUXvpvAMJiLDW4ZwHFxJ422ywD3GRI8jUHtrpCuvAwqm0IOYtlZiTwjkIqd0IcfAq0+q1S3Y4lzl+Giq7YwDYe/cst9RiAe9eKt6gg1x17YvFPdYvdcux4sxkn/fdXjXE8Z4PU1qSglLvyaRubj+tw4BPatnIfIeyfdp6Gp8Vmu5u0OqxAUns3ewfP6h9+nrWkg101yyjy3qFHtXPHT5Q8U8UwU9TTnCV7pFE7OxH3B/MK+bNnrIuDLP0Z+tlA1Gp/KvpPpC/5difufiK+cNkcLp1H0T90Ty4+XLWrKyqfZ27eQDEXAogSund2Fn4zXIxrq2204hjM6Jr39hda5Lhp0KWLotaNq4T77j32bgqd6U7U7RPaiWQfGq50cPG1MJ+1A96MPxq19Kn/Had9v4nWlf9wy6My+ufNvnQ3H1pDo7feb50p/GmFB6+k+itv6rw08kI9zGvmo8K+j+iNp2XY83/AJjSz6Gh2XKlps0tVFgUUtJQTgyPbeHlFcctD5Hh8fnULVve0GUqeBEVUrqFSVPEEg+lUWxw8npPSL99ftvuP5Da1jo32p12G6tj2rJy+OQ6ofmP3ayep7cvbAwuJVnMW3BS4e4HUN6ED3mopntlyXep6f3qHjtco1vZuE6q31fWNcILHNcOZu0SwBPGBMDwFVfcvYQwr3f0lVF7NNtvqFImbc85LTzGnrC7xb5KcRbu4EsGUFHLDsXVmVXLxMHNrpxqA27jcbeGfFC7knQFGS0DygQBPnrXRK2KfHgx9PoL5Rak1FT7z3/4Xrae+GFsI+HJfEMAVYnKQ+aZBcaaTGgqv4G/tHaNsWbbBbKZVZiQJKwRmPtFuB0AqA2NsDEYokWEkDixOVR4T3+Aq37pYHEbPxIt4hQLd/sBlOZOsElBPInUa94pIylN89HRbRp9NB+207Fzz+iKRcwF43Ht5Hd0Yh8qs5BBiTAPdxqd3Y3ObF2zdN1UUFlygEvmHJh9Xl31pGJxiYe9bQWmnEu2Z1GgZVABfzAHuNcuPxVrCYlHYhUxMq54AXUjIx7pBIJ8FplTFPLKp+rXTio1xw8cfh2Q27e7+GvYJ16oLeh7V1jq63UMEgn2dYMDvrNbtsqxVhDKSrDuIMEe+td2jtzBYJmaZe8c7C3DkkAAEiYE6eZrL94NoJiMRcvJbyByDlJnWACTHM8Y8aS5RSXydXpVl0pzlJPbLnL+TgBjUVq2xMf19hLnMiG+8NG+PzrPdm7vYi9qqZV+0/ZHpzPoKve72yP0VCvWF8xzHSFBiDA493upak0R6tZTOKSf2kTApRXkzgCSQAOJOgqqbw9IuCwoIDda/wBlPzq/Bgknv9/y/E/c/EV80YLEZC2k5kdOMe0InxitdxnSZh8dg8RYZGs3SvYUnMtwZh7JH1hxg8uFY3bUngCfKrILHZVPno6mvM5zOSSeJPhTmNGHwjtwU+6u19j3wM2Qwe4g/Cpyifan8M69xrkbRwh/x7XxIH41bemO9kxZPOEIGvER3VUd1MJcGPwpNth+sWTwPJlJ+E1Zum4/rn7o/Co8hhpcmdq0mTxJJPrT2NGHw1xoyI7eSsfkK7U2LiD/AHLjzWPnTNohRk+kcB4V9EdDbg7Mt+D3B/mrBF2RfLBBafMxgCOJrdOhUEbOysCCLtyQQQRw4g8KSXRMYtPkv9LSClFVjhNFFFGAM+UVA7wYaGDjg2h8x/p8qseWubaOF6y2y8+I8xw/L1qJxyjr0N/s3KXjplPooorjPYGr9HuBwpw6Xrdtet1V2PaYOOME+yDodO+p/D5r9lhibOTNnVkJDgqCQDPiNaz3ox2r1d9rDHs3hK/tF/MT/CKuW3d4hhL1sXoNm4Dqur23XmQOKkHzBHu765LYmeP1tFi1MorLb5Xz+H88Fd3AGIuWrlpLuSxbuEBlVetJmSoJEAaiSQTy8rbjU63CsL30RiQXZSbbqZtuSNJkK1Ujam/KJcZsDayliM7uIW5HAlBz8ZB755Vq9cxWNuFjmcsRMaII0H/aIFJ7sYrC5Op6Cy6btniC757Lxj+kO0tperXPeIXMI+jVtMwzTrziPCqVt3bl/HXFzLwBCW0BMTEnvJ0HuqW2dueON9/3U/Fj+AqzYLA27Qi0gUeHE+ZOp9aR7599Dxt0mlealul8lN2bujefW6RbXu4v7hoPU1adm7v4ezBVMzD6z9o+nIegpNr7w4bCib91V8OLH0qmbQ6UbJkWZAESxViT4KI1PmVGvGnjWl0jj1Gvtt4bwvhGi4jEogl2A8+fkOdVraO/FpQep7RBC6zJJBIyqJLaD6oJ8KzLEbw4zFtFhTMyGYK7g8oBGVYk66tw7WlSGzN1ltHr9oYo225w5N1geIkGatUDgcz32/vBevnq7hcAnKbYH0hBJBKINAeHtMIkysiDUdtbpXbCteulbKETbW84N+53AIokk9+gHfVk2jvdh8MMmzrIQxrdcS58deFUnau0rl9ususWJ5sZ9KZLAnMmeWwY/SLebhJnnwBNTu04F64i6KruogADskrMDyqv7LMXk8z8jU7jgRfuz/1HPvYmq7TX9KS3tHphMFcuGLaMxHHKCY91e74Z7bZWlWHEHiPA17bJt2+215ZRcs+0SCxMQFYTwPE6R4177VLda2aOCxEgZcoycdfZjjrXO3wenqjGVmx9EzuRazXJY6rcsweHFoIqc6TMGk3boUZ1NoTlEkMDoCeHs1CblGHJP/Uw/wD9gq0dJi/RXj42f/IU66MTWVxjrVFLjgypL1wtlUsSToFmSfIV73sNfSDcDrmmM0gmInj5ivPA2s91ViczRBJA941qSxxU27Zt6W8z6QytnhMx7TGRGXhHPSlb4NSuuCsUcLk5tj2Sb9oZol11kiNe8EEehrbN0rAti6qkxmU697ZprFNm3Mt62x4BlPxrbt2vau/+38mqYMzvW4KLjgnQKcKKWrDz4lJTqKnAFKNuvPLXbkpr2qkko+3ML1d0xwbtD14j3/Oo+rfvDgC9uVBLKZAGpIOhHyPpUTg93bja3DkHdxb8hXLOt7uD02l11fsJ2Sw1wRNm6yMHQlWUyCNCD3g1I2Nl4jENnadeL3CZPv1NWHB7LtW9VWT9ptT/AKeld3WBRLEAeNPGr5OS/wBWWf6UeflnDs7dqymtybh8dF/h5+s1PoAogQAO6ABUY+POUsijKONy4clsep41U9r7zW5yhmxDcgspZB8hq/yq1RSOBLUaqXl/kW/E7dtrItg3GHHL7I+850FVXau9Z4Ncn/DscPJrp4+nvqvG7icUe3mW0p7YRYS2B7Ry6SQNY417Lsa2mdTdVnTKD9VA7glO02hVgCJ01K8taVy+DRp9Oqr/AO15fwv3K/icLdxl5U4EnKkmAMx4Enl4mvRthWsK7Ji27aGGQGTI8RXZt4gPForBAOVDmysR2reb60GRInlURidkXrlyTIDLmlu7nPrVkJ54OL1LR+21ZFcM78XvULa5MMotjv8Are+oPLiMQ09pp4kz86nsDsOykF2Dkd8RXhtLbmWUw68NC0Qo/Omz8GXsI7E7OSyM15gzngvH31CXXLnSpPB7LvYh4UM7HkPzrSN2eiw6Pi2gfYXj6mp67Jx8Ge7E2QdLpBOUzoOXOpLeO1lxd0cJaR+8A341tO0di2bODvpaQD6J9YljCk8fSsj31H62T3pbPvRaqm8mp6ZxYO2HirgVwrucuXKgvG0upOYzME8NPM1238Uk38ypcH0RGZmLZiFVstyZPE9rXv1muTYuKYIALVxspeQtxFR84GjW2Q5yBy15aU/B4tMzu3tyzL1sOf7K6IYwAe1k0gcqqN+Ce9vBMbqKq3WFtpGfDlTpIBdYDRzEwfEGrT0lr9De+7a/mIqq7plTdcoIBNgx9k50JAniAZjwq39JKfQ3v2ds/wCemXRl6zjWx/D9DJtlXSt5QGZQzANkJUx5jWptcXDYc3IkXWDBrpvqEbIDLFiBpOnrUHs27DmFY5lI7Li2RqGJzEEDRaksTjQbto3UYBdSC63FYHmAqAEnmdZqH0abTdvR7YA23vIyAI4uhcqzlYEnK6idCCNQDGoIitd3Z9q7P+H8jWR/pSvdtgcVayEdQOAVQynhMNwnxrXN1vaufdt/I0R7M31dPbHJYAKUCloqwwRIopaKkCrgUoWnqK8cbiltJnYEiQIHGTwqQHm3XLimVPaMeHP3VzWsRibx7K9Wmsn63v018qrW8G0r1u6LGFyh8huXLjlSVUTqC2gAGsxOtD47LaanZLaiw4rF5Fz3GWyn27h1P3V4k+AqsbR3ysr/AMNbN1/+pe0UfdtzPvioG7sx3YXMXiAA5VVuEtdzlxIidQoHGYjurvxCW7LC41m2hCsSCxDjEISpQWp/syR9mIJ10FK5/Bs06CmDW77T/wBHBiMViMWS2JuuQq5wAsjLmC9i2CqwJMnuBp+Cv2rRVlzql3rLTEnUIMsXQREEE8B9kinKhvBUsW3RbbMetdoNsPBNsERIHH7WvjXTf2OwuMb10utpgO0QSQDwhpkcTERrrVbbNLMUtvS+BrbVN24htWWd1LFAW7IIVUaW/vEIUSWynUyTNLtHZt0rbF28MmWcojKsSoVY0MARJJ86lMdirYtTCgkiJOZlUTIJ4CTEKIGnCoLbeJNwrAyWwMqhva5nUciTPGNTUFNcuU0sYPM421aEWlk/aPPy5n4VH4naDZM72+sUH2WJCtB1GnLyruw2ymbgsAiM1wEk/ctjU+dd93d6EIckaazBYDmYHZX4mpisFOrvqnHb2yni717nq7eWToiyVE8FEmSPAyavG73R01yHv6D7PCovZ11rDxhlCt9qFdo82EDyGlTn9I45yJxbr4Lp8oqzf8GPbRtWGaBsfYFnDgC2oBHhUwBWZWtvY+0cwvC4OaOoIPkRqvpV43Y3gt4xCVGS4sdZbPFfEHmp76MnPKtxWTs2un0F0f4b/wAprEd+V/WR+zt/yCt02ov0N39nc/lNYzvUP1tDpPU2jrw9mJpZHb6c8WZOLFlWCK0rC230TOYyxpk9kk668ezrpTrOG613uSqMjWzkuyMw0ALGIzExMwDmJpuFnMGdntqLNrtpdK6HRZhGJJ+zGkV3WrL3Lt0sQqtlDHVzlCG4jgiM0i2CTzzTSm9XPade5qFb1wMIINuQdCCLi6VcukgfRXf2SfC5VR3eDdfcDEEgWgGHBlzW8rA+KxV26Rl+iun/AAflcFC6MvXyzq4v7jH7jBcQTBgyIADe0kDs/W48K6LeH/srTC4qFz23Qr2mgQoPBeE98zXHeUm+ARqzIAA0TMAdrl51LXhm6lbTdnrYzFncrc0gHMq9mBOnGKPBqKWJIbZwzJds9pWRbgQMk8RckqwIBDan05mth3Y9u5923+NZHbw5BzJcnMbLXFgDK7gOjDjI7RE1re64i5cXmESfiPwoj2Z3q7zGJY4oinURVpgjYop9FAFZWvPG4fPbZe8aeY1Hxr2UU4CnwRk49kX2ZIuzmQ5TykcVaPKJ8QaoO/ztYx1u+ijKUWdNGgsHQ+BXT1q47ctXFZLtoxB7Q5MvMH0rx3g2ct+0RoWGqzwn/fyquXWDs0tirsUn0+zOf6VxFwzb7Ovt5QCVXRM31cyj6wAPjXTsmwtt89ybjkaezM8jmaSPMa16/olxXyEEEHhzHpUhhdngmCT90CWIMHQcqpN+VsFDgMSydavZkADOLZMNcktqSSW5AnnFDYRmYvcgZyT3lpM6ActalsFspi0ICvgNX5HXkvD41Y8DsALqxjwU9o+b/gIp9jZnWayMOIlOtbEZtAMrfV7Je6BzheCz3nhUzsbccL2rhyn0e5/ERlT0Bq4YewqCEUAeHPz76fcuqoliAPGnUEjPs1lk+MlWx2zEtEi0uUaDjJPiSZJNQu0VyK7PwCknyUE8oqxba2pbBlAX+1HKOevGq3tnH2b2HuhHElG0Oh748aGhKpPJX9jLobjcWPur2fFAtAAOvqfKo7DYqFy+NeeIsnPmVc0quU/YdWzAnuH5VW0amnceZyWWTdi+Gkc14j3aeB1FGDx36NibOIQ6Zglwcmtto0+mvmorksL1ZusQoVgMsadqCrae73GuAM1whPtMAB5mPxFERdUo78JYyuTeMck2rg70cf5TWL7ywMXY5g2bXry9a2u6OwR/2kfCKyPejY10nCYkKSgS2rwCcsGZMedPJHLoJJWckVssEW4yyOrQ5bdm3cdobKSc6EkA6+FLtK6632ykgNkDAgA62gsEAQrAMRA4a1IbPxFlUto5IYZw46vVhJC9qQyEeFeW1VUspUAyw4KV5QOzxqtm1Q/6n2kLuqzdY/eFQCddBcTSr/0g/wBjc/Yv8GWqRs2y9ibjK2VmRVBGp7QLEe6r7vomYLbhj1qvbkD2c0QT4TFNFcGbr7YvUqS8GNW2KX1hsgJQEgDRWKzxGnnUnt1nW1bJ6xGFwlQ5TMRlnOuRF0mNdQa6P6Ne1eZrtt1yqAGCzDZcuYTpxmubbF1bqLknRpb6NUzMBGYkMZPgI4mofRp1PfbF+CMw1984bj7A7pC5QoMeAFbfuyTmYnSbaE+cnSsp2Dse5duKLaE6LLQYHCTPKtd2QuW6y/8AYvzNTDs5PWbIPEYk1NE0lFWGCE0UUUEEAEp4WvDE4R29m66eACx8q4n2TiDwxT+oP4NTZDBJX7GZSO/h51SN5drXrDqiKIYTLTAIMFYH+9RVi/oW/wA8R7w3/wCq5sTur1rA3buYLwGUxPM6sajGWMuCM2TeN9dAC3BivZHgc0+dT2E2fbUDPcUd6qwE/eaZNOtbvIBGcx3BVH4V1JsW3zLH1UfIUYQ+94xk9reKsoIVkAHIf6UrbUsj6/wP5U1dj2fsk/vH8K9F2VZH92PUk/jU5EwjxbblkcyfIGonbe2EuJCzIOkgR86sK4C0OFtP4RXp+jqOCL/CKjIYRlm0dp3VHYgelUy7i7yXCWGYEyeA41um2NhW8QIYZSODLE/61X7nR/bP9638I/Op3DQSTzkyy9cDCRPpy7pFduCN/LChmHEQucR3ggcK0vD9H2FUyxZveoPuavO50e2g+axeu2uOi6geUmaRrJ1K9ReYsze5fc6NPlVh3N2SWuC+/soQV8WHsx4A6+dWvBdH+HQy73HPiFA9QONXCxh0ChSqmBGqKPgBFQoiWX5X3kA2Jb7Rrp2RtVXtqVUnkYEjSpW5s+yeNsekj5VG4LdrD2mLWw6k8Yc/MyY8JpnkoWDk2m2FUh71q0pOgZwFJ8NYmueylpu3aRD3MsMPQ8qmcRsOy/t5282J+dJZ2LaXRS4HcDH4VGGWb/s4yyu7dxQhOsMBWBGlT21ds2VCs7hBrq5yjlzovbAsNHWZ3AIOVnldPCu3aOzMPdUC5ZVh5R8qOSvgbhMRavJKslxSORVx+NR74rAZ+rKW5mD9GMs+cRXvgt3sLaBFq3kkyYYnX96a9v6ItTPanv7M/KjkaLS8s7FCqIUADuER8K49jNN1/Ln5ivQ7LtnjmPm1e+AwVu0SUBBPEkkzHmdKkRkhFEUBqWakUblpaWaKAI4JTslOApYqSBmSkKCvQCiKAPPIKMtekUsUEnnlpctPilqAGRRlp9AoAblpMlegoiggZkFHVinxS0Bk8+rFKEr0iiKAEy03JXoBRFADMlHVin0RQSM6oUptingUsUAeYtigWq9KKAGZKcLdOFKBQAoFGWnCigBIop1JQBx0RS06KkUaKWliiKAG0oFOoqCQpDTqSgBAKKdSUAJFVDeve3qYTCupuB2FwFSQuXSOWs/KriayPeDG4W7eV7FtlWSbpPFyWliO0eU93Gq7JYR3+nURts+0spfzksW0d8yLllbNxChCdcxQ6Et24nkBrU3tree1ZsLetxc6yRaGoBj2iZEwPyrP7uKwn6UHFphhhEp9Y9nX632vGpPfq0oGFNpSto2jkU8pIYg6nXUUm94bO6WjqdlcMNZ7+vnH3nkN+MZmmUj7OQR5Tx+NWsb3KcG2JW3LKyo1vNADsQBrGq6zVXvYyx/RSWgy9aLns6ZgczEt3xl0nxrs6O8Ct1cQt1Q1sm1ofZLKWP5URlLOM9jaimj23Y4bdssfesnG2/eLJ06oA8sh0+NafFY3vJaVcXeVAFUPAAEACBoAK2WmrbecnL6lXXGNcq44ys/kIBSxSigVaZQlKKWigBKKWKWKAEpwFAFFBI6iiiggKKKKAOSlAoApwoIEpaWKIoASKWliigBIopaKCRKSKdRQQIRVbxW6gfFriMyC2uX6IWxByg85jUmeFWWiKhpPssrtnW24vvgrWA3UCYq5iHZGVs2W31YAXMRHEkaARwqU21sa3ibXVXBEaqw4oeEj8qkooio2roaWoslJSb5XRnq9HdzNriFy9+Q5o8pj41ddkbLt4a0LVoaDUk8WY8WPjXaKWhQS6LLtXdcsTZSdrbjNev3Lwvhc7ZoNsmPCc1XUClApwFCil0JbfZakpvroZS0sURTFIlFLFEUAKKKBS0AFFFFAC0Uk0s0EBRRRQSc8UtFFAC0UUUEC0UUtBIkURS0UECRS0UsUEjaWlpKAFoAoiligAiiiigBaSlpKACiiiggWkoooAKKKKACiiigAooooAKKKKAPIUooooJCiiiggWlFFFBIUUUUAKKWiigBDSUUUAKKWiiggKWkooAU0lFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH//Z'
                },
                price: '฿100'
            },
            {
                name: 'rabu rabu ลิปติกสีน้ำตาลคาราเมล',
                detail: 'รายละเอียด',
                image: {
                    url: 'https://scontent-ams3-1.cdninstagram.com/vp/189e504395f4304425662ad8fc901657/5CE14F50/t51.2885-15/e35/40705498_2087700221249970_2326149996803522540_n.jpg?_nc_ht=scontent-ams3-1.cdninstagram.com&se=8&ig_cache_key=MTg2OTQzNDYyODQwMDM1NzI2OA%3D%3D.2'
                },
                price: '฿100'
            },
            {
                name: 'rabu rabu ลิปติกสีส้ม',
                detail: 'รายละเอียด',
                image: {
                    url: 'https://cf.shopee.co.th/file/9029d32bdeb224771150e4fd158892ee'
                },
                price: '฿100'
            }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.clickToHome = function () {
        this.router.navigate(['/product-detail']);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n    <div class=\"row mt-5\">\r\n        <div class=\"col-md-7 col-sm-12\">\r\n            <iframe width=\"auto\" height=\"315\" src=\"https://www.youtube.com/embed/UUhiODoUNGQ\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n        </div>\r\n\r\n        <div class=\"col-md-5 col-sm-12\">\r\n            <auth-login></auth-login>\r\n        </div>\r\n    </div>\r\n    \r\n</div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.full-width {\n  width: 100%; }\n\n.cover {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var ng6_md_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng6-md-auth */ "./node_modules/ng6-md-auth/fesm5/ng6-md-auth.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(userAuth, router, spinner, snackBar) {
        var _this = this;
        this.userAuth = userAuth;
        this.router = router;
        this.spinner = spinner;
        this.snackBar = snackBar;
        this.credential = {
            username: "",
            password: ""
        };
        this.hide = true;
        this.userAuth.isLoggingIn.subscribe(function () {
            _this.spinner.show();
        });
        this.userAuth.isLoggedIn.subscribe(function (value) {
            _this.spinner.hide();
            if (_this.userAuth.user) {
                _this.router.navigate(["/home"]);
            }
        });
        this.userAuth.isLoggedFail.subscribe(function (error) {
            _this.spinner.hide();
            if (error.error) {
                _this.snackBar.open(error.error.message, "Error", {
                    duration: 2000,
                });
            }
            else {
                error.error.message = "Connection error, please try again";
                _this.snackBar.open(error.error.message, "Error", {
                    duration: 2000,
                });
            }
        });
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [ng6_md_auth__WEBPACK_IMPORTED_MODULE_0__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/product-detail/product-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/product-detail/product-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-3\">\r\n  <div class=\"col-5\">\r\n    <div class=\"images-slide\" *ngIf=\"productDetail\">\r\n      <slideshow [imageUrls]=\"productDetail.data.images\" [height]=\"'500px'\" [minHeight]=\"\" [showArrows]=\"false\"\r\n        [autoPlay]=\"true\" [autoPlayInterval]=\"5000\" [backgroundSize]=\"'cover'\" [showDots]=\"true\" [dotColor]=\"'#010101'\"\r\n        [lazyLoad]=\"true\" [autoPlayWaitForLazyLoad]=\"true\" [hideOnNoSlides]=\"true\">\r\n      </slideshow>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-7 mt-2\">\r\n    <h3>{{productDetail.data.name}}</h3>\r\n    <h2 class=\"price-color\">฿ {{productDetail.data.price}}</h2>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-3 mt-2 mb-2\">\r\n        การจัดส่ง\r\n      </div>\r\n      <div class=\"col-9 mt-2 mb-2\">\r\n        ค่าจัดส่ง\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-3 mt-2 mb-2\">\r\n        ชนิด\r\n      </div>\r\n      <div class=\"col-9 mt-2 mb-2\">\r\n        <div class=\"row\">\r\n          <div class=\"col-3 mb-2 pr-0\" *ngFor=\"let item of productDetail.data.type\">\r\n            <div class=\"type-contain\">\r\n              <p class=\"mb-0 type-name\">{{item.name}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"row mt-4\">\r\n      <button mat-raised-button (click)=\"openDialog()\">เพิ่มไปยังรถเข็น</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/product-detail/product-detail.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/product-detail/product-detail.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".images-slide {\n  display: block;\n  width: 100%; }\n\n.price-color {\n  color: red; }\n\n.type-contain {\n  border: 1px solid;\n  height: 50px;\n  border-color: lightgray;\n  display: flex;\n  align-items: center;\n  cursor: pointer; }\n\n.type-name {\n  width: 100% !important;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/pages/product-detail/product-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/product-detail/product-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _modals_login_modals_login_modals_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../modals/login-modals/login-modals.component */ "./src/app/modals/login-modals/login-modals.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(dialog) {
        this.dialog = dialog;
        this.productDetail = {
            data: {
                name: "ลิปติกแดง",
                price: "120",
                shipingfee: [{
                        name: "ไปรษณีไทย",
                        price: "50"
                    }],
                images: [{
                        "url": "https://cf.shopee.co.th/file/a1089bef5b9230f470fb9493ace9dbde"
                    }, {
                        "url": "https://cf.shopee.co.th/file/5587aeb773e8633236061880e481279a"
                    }, {
                        "url": "https://cf.shopee.co.th/file/d93b05570158112438f4544fd0cea81a"
                    }],
                type: [{
                        name: "สีชมพู"
                    }, {
                        name: "สีน้ำเงิน"
                    }, {
                        name: "สำแดง"
                    }, {
                        name: "สีเขียว"
                    }]
            }
        };
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
    };
    ProductDetailComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_modals_login_modals_login_modals_component__WEBPACK_IMPORTED_MODULE_0__["LoginModalsComponent"], {
            width: '260px',
            height: '150px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    };
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/pages/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.scss */ "./src/app/pages/product-detail/product-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <div class=\"row mt-5\">\r\n      <div class=\"col-md-7 col-sm-12\">\r\n        <iframe width=\"auto\" height=\"315\" src=\"https://www.youtube.com/embed/UUhiODoUNGQ\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n      </div>\r\n\r\n      <div class=\"col-md-5 col-sm-12\">\r\n        <auth-register></auth-register>\r\n      </div>\r\n  </div>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/pages/register/register.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-form {\n  width: 100%; }\n\n.full-width {\n  width: 100%; }\n\n.cover {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_md_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng6-md-auth */ "./node_modules/ng6-md-auth/fesm5/ng6-md-auth.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userAuth, router, spinner) {
        var _this = this;
        this.userAuth = userAuth;
        this.router = router;
        this.spinner = spinner;
        this.userAuth.isLoggingIn.subscribe(function () {
            _this.spinner.show();
        });
        this.userAuth.isLoggedIn.subscribe(function (value) {
            _this.spinner.hide();
            if (_this.userAuth.user) {
                _this.router.navigate(["/home"]);
            }
        });
        this.userAuth.isLoggedFail.subscribe(function (error) {
            _this.spinner.hide();
            console.log(error);
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/pages/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/pages/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [ng6_md_auth__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    environment: "dev",
    appName: "rabu-mlm",
    apiUrl: "https://apis.rabu-mlm.com"
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular\rabu-mlm\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map