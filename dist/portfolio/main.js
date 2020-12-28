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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.onActivate = function (event) {
        window.scroll(0, 0);
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[3, "activate"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "router-outlet", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function AppComponent_Template_router_outlet_activate_2_listener($event) { return ctx.onActivate($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_recent_work_recent_work_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/recent-work/recent-work.component */ "./src/app/components/recent-work/recent-work.component.ts");
/* harmony import */ var _components_footer_social_footer_social_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer-social/footer-social.component */ "./src/app/components/footer-social/footer-social.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _components_home_briefs_home_briefs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home-briefs/home-briefs.component */ "./src/app/components/home-briefs/home-briefs.component.ts");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _components_works_hero_works_hero_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/works-hero/works-hero.component */ "./src/app/components/works-hero/works-hero.component.ts");
/* harmony import */ var _pages_work_gigm_work_gigm_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/work-gigm/work-gigm.component */ "./src/app/pages/work-gigm/work-gigm.component.ts");
/* harmony import */ var _pages_design_process_design_process_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/design-process/design-process.component */ "./src/app/pages/design-process/design-process.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pages_work_couponcooler_work_couponcooler_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/work-couponcooler/work-couponcooler.component */ "./src/app/pages/work-couponcooler/work-couponcooler.component.ts");
/* harmony import */ var _pages_work_bcaster_work_bcaster_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/work-bcaster/work-bcaster.component */ "./src/app/pages/work-bcaster/work-bcaster.component.ts");
/* harmony import */ var _pages_playground_playground_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/playground/playground.component */ "./src/app/pages/playground/playground.component.ts");























var appRoutes = [
    { path: "", component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__["HomePageComponent"] },
    { path: "about", component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"] },
    { path: "playground", component: _pages_playground_playground_component__WEBPACK_IMPORTED_MODULE_19__["PlaygroundComponent"] },
    { path: "GIGM", component: _pages_work_gigm_work_gigm_component__WEBPACK_IMPORTED_MODULE_12__["WorkGigmComponent"] },
    { path: "design-process", component: _pages_design_process_design_process_component__WEBPACK_IMPORTED_MODULE_13__["DesignProcessComponent"] },
    { path: "couponcooler", component: _pages_work_couponcooler_work_couponcooler_component__WEBPACK_IMPORTED_MODULE_17__["WorkCouponcoolerComponent"] },
    { path: "bcaster-dashboard", component: _pages_work_bcaster_work_bcaster_component__WEBPACK_IMPORTED_MODULE_18__["WorkBcasterComponent"] },
    { path: "**", component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__["PageNotFoundComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, { enableTracing: true }),
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__["ServiceWorkerModule"].register("/ngsw-worker.js", {
                    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].production,
                }),
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _components_recent_work_recent_work_component__WEBPACK_IMPORTED_MODULE_6__["RecentWorkComponent"],
        _components_footer_social_footer_social_component__WEBPACK_IMPORTED_MODULE_7__["FooterSocialComponent"],
        _pages_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
        _components_home_briefs_home_briefs_component__WEBPACK_IMPORTED_MODULE_9__["HomeBriefsComponent"],
        _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__["HomePageComponent"],
        _components_works_hero_works_hero_component__WEBPACK_IMPORTED_MODULE_11__["WorksHeroComponent"],
        _pages_work_gigm_work_gigm_component__WEBPACK_IMPORTED_MODULE_12__["WorkGigmComponent"],
        _pages_design_process_design_process_component__WEBPACK_IMPORTED_MODULE_13__["DesignProcessComponent"],
        _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__["PageNotFoundComponent"],
        _pages_work_couponcooler_work_couponcooler_component__WEBPACK_IMPORTED_MODULE_17__["WorkCouponcoolerComponent"],
        _pages_work_bcaster_work_bcaster_component__WEBPACK_IMPORTED_MODULE_18__["WorkBcasterComponent"],
        _pages_playground_playground_component__WEBPACK_IMPORTED_MODULE_19__["PlaygroundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__["ServiceWorkerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _components_recent_work_recent_work_component__WEBPACK_IMPORTED_MODULE_6__["RecentWorkComponent"],
                    _components_footer_social_footer_social_component__WEBPACK_IMPORTED_MODULE_7__["FooterSocialComponent"],
                    _pages_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                    _components_home_briefs_home_briefs_component__WEBPACK_IMPORTED_MODULE_9__["HomeBriefsComponent"],
                    _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__["HomePageComponent"],
                    _components_works_hero_works_hero_component__WEBPACK_IMPORTED_MODULE_11__["WorksHeroComponent"],
                    _pages_work_gigm_work_gigm_component__WEBPACK_IMPORTED_MODULE_12__["WorkGigmComponent"],
                    _pages_design_process_design_process_component__WEBPACK_IMPORTED_MODULE_13__["DesignProcessComponent"],
                    _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__["PageNotFoundComponent"],
                    _pages_work_couponcooler_work_couponcooler_component__WEBPACK_IMPORTED_MODULE_17__["WorkCouponcoolerComponent"],
                    _pages_work_bcaster_work_bcaster_component__WEBPACK_IMPORTED_MODULE_18__["WorkBcasterComponent"],
                    _pages_playground_playground_component__WEBPACK_IMPORTED_MODULE_19__["PlaygroundComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, { enableTracing: true }),
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__["ServiceWorkerModule"].register("/ngsw-worker.js", {
                        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].production,
                    }),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/footer-social/footer-social.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/footer-social/footer-social.component.ts ***!
  \*********************************************************************/
/*! exports provided: FooterSocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterSocialComponent", function() { return FooterSocialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");



function FooterSocialComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var social_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", social_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](social_r3.name);
} }
var FooterSocialComponent = /** @class */ (function () {
    function FooterSocialComponent() {
        this.socials = [
            { name: 'Medium', url: 'https://medium.com/@jidelambo' },
            { name: 'Twitter', url: 'https://twitter.com/jidelambo' },
            { name: 'Linkedin', url: 'https://www.linkedin.com/in/jidelambo/' },
            { name: 'Email', url: 'mailto:jidelambo@gmail.com' },
        ];
    }
    FooterSocialComponent.prototype.ngOnInit = function () {
    };
    FooterSocialComponent.ɵfac = function FooterSocialComponent_Factory(t) { return new (t || FooterSocialComponent)(); };
    FooterSocialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterSocialComponent, selectors: [["app-footer-social"]], decls: 5, vars: 1, consts: [[1, "footer", "py-5", "md:py-10"], [1, "container", "max-w-6xl"], [1, "socials-wrap"], [1, "social-icons-wrap"], [4, "ngFor", "ngForOf"], ["target", "_blank", 3, "href"]], template: function FooterSocialComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FooterSocialComponent_li_4_Template, 3, 2, "li", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.socials);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".socials-wrap[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n@media only screen and (min-width: 320px) and (max-width: 480px) {\n  .socials-wrap[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n}\n.social-icons-wrap[_ngcontent-%COMP%] {\n  padding-left: 0;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n}\n@media only screen and (min-width: 320px) and (max-width: 480px) {\n  .social-icons-wrap[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    -webkit-column-count: 2;\n       -moz-column-count: 2;\n            column-count: 2;\n  }\n}\n.social-icons-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.social-icons-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #333333;\n  font-size: 2rem;\n  font-weight: 500;\n  line-height: 3rem;\n}\n@media only screen and (min-width: 320px) and (max-width: 480px) {\n  .social-icons-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaWRlbGFtYm8vUmVwby9wb3J0Zm9saW8vc3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci1zb2NpYWwvZm9vdGVyLXNvY2lhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXItc29jaWFsL2Zvb3Rlci1zb2NpYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7QURFSTtFQUpKO0lBS1EsYUFBQTtFQ0NOO0FBQ0Y7QURFQTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLFdBQUE7QUNDSjtBRENJO0VBTko7SUFPUSxlQUFBO0lBQ0EsdUJBQUE7T0FBQSxvQkFBQTtZQUFBLGVBQUE7RUNFTjtBQUNGO0FEQUk7RUFDSSxnQkFBQTtBQ0VSO0FEQVE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0VaO0FEQVk7RUFQSjtJQVFRLGVBQUE7SUFDQSxtQkFBQTtFQ0dkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci1zb2NpYWwvZm9vdGVyLXNvY2lhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zb2NpYWxzLXdyYXAge1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICBcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG59XG5cbi5zb2NpYWwtaWNvbnMtd3JhcCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGNvbHVtbi1jb3VudDogMjtcbiAgICB9XG5cbiAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogM3JlbTtcblxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLnNvY2lhbHMtd3JhcCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnNvY2lhbHMtd3JhcCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxufVxuXG4uc29jaWFsLWljb25zLXdyYXAge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5zb2NpYWwtaWNvbnMtd3JhcCB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGNvbHVtbi1jb3VudDogMjtcbiAgfVxufVxuLnNvY2lhbC1pY29ucy13cmFwIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5zb2NpYWwtaWNvbnMtd3JhcCBsaSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzMzMzMzMztcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogM3JlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuc29jaWFsLWljb25zLXdyYXAgbGkgYSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gIH1cbn0iXX0= */"] });
    return FooterSocialComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterSocialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer-social',
                templateUrl: './footer-social.component.html',
                styleUrls: ['./footer-social.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var _c0 = function () { return { exact: true }; };
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 17, vars: 2, consts: [[1, "bg-green-300", "py-3"], [1, "container", "mx-auto", "w-full", "h-auto", "md:h-24", "flex", "flex-wrap", "md:flex-no-wrap", "items-center", "justify-between"], [1, "brand-wrap"], [1, "text-2xl", "font-bold", "text-black"], ["routerLink", "/"], [1, "header-menu-wrap", "mt-6", "md:mt-0", "overflow-y-scroll"], [1, "menu-group", "md:text-xl"], [1, "mr-4", "md:mr-6"], ["routerLink", "/", "routerLinkActive", "active", 1, "hover:underline", 3, "routerLinkActiveOptions"], ["routerLink", "/about", "routerLinkActive", "active", 1, "hover:underline"], ["routerLink", "/playground", "routerLinkActive", "active", 1, "hover:underline"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Jide Lambo");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Work");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Playground");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".header-wrap[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.header-wrap[_ngcontent-%COMP%]   .brand-wrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n}\n.header-menu-wrap[_ngcontent-%COMP%]   .menu-group[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  gap: 15px;\n}\n@media only screen and (min-width: 320px) and (max-width: 480px) {\n  .header-menu-wrap[_ngcontent-%COMP%]   .menu-group[_ngcontent-%COMP%] {\n    flex-wrap: nowrap;\n    padding-left: 0;\n  }\n}\n.header-menu-wrap[_ngcontent-%COMP%]   .menu-group[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.header-menu-wrap[_ngcontent-%COMP%]   .menu-group[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.header-menu-wrap[_ngcontent-%COMP%]   .menu-group[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000;\n}\n.header-menu-wrap[_ngcontent-%COMP%]   .menu-group[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaWRlbGFtYm8vUmVwby9wb3J0Zm9saW8vc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0Y7QURFSTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtBQ0FOO0FETUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLFNBQUE7QUNISjtBREtJO0VBTkY7SUFPSSxpQkFBQTtJQUNBLGVBQUE7RUNGSjtBQUNGO0FESUk7RUFDRSxnQkFBQTtBQ0ZOO0FESU07RUFDRSxjQUFBO0FDRlI7QURLTTtFQUNFLFdBQUE7QUNIUjtBREtRO0VBQ0UsMEJBQUE7QUNIViIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAuYnJhbmQtd3JhcCB7XG4gICAgYSB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLmhlYWRlci1tZW51LXdyYXAge1xuICAubWVudS1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogMTVweDtcblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgbGkge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcblxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICMwMDA7XG5cbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIuaGVhZGVyLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhZGVyLXdyYXAgLmJyYW5kLXdyYXAgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5oZWFkZXItbWVudS13cmFwIC5tZW51LWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTVweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuaGVhZGVyLW1lbnUtd3JhcCAubWVudS1ncm91cCB7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG59XG4uaGVhZGVyLW1lbnUtd3JhcCAubWVudS1ncm91cCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uaGVhZGVyLW1lbnUtd3JhcCAubWVudS1ncm91cCBsaTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLmhlYWRlci1tZW51LXdyYXAgLm1lbnUtZ3JvdXAgbGkgYSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLmhlYWRlci1tZW51LXdyYXAgLm1lbnUtZ3JvdXAgbGkgYS5hY3RpdmUge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn0iXX0= */"] });
    return HeaderComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home-briefs/home-briefs.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/home-briefs/home-briefs.component.ts ***!
  \*****************************************************************/
/*! exports provided: HomeBriefsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeBriefsComponent", function() { return HomeBriefsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var HomeBriefsComponent = /** @class */ (function () {
    function HomeBriefsComponent() {
    }
    HomeBriefsComponent.prototype.ngOnInit = function () {
    };
    HomeBriefsComponent.ɵfac = function HomeBriefsComponent_Factory(t) { return new (t || HomeBriefsComponent)(); };
    HomeBriefsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeBriefsComponent, selectors: [["app-home-briefs"]], decls: 28, vars: 0, consts: [[1, "py-10", "md:py-16", "bg-green-300"], [1, "container"], [1, "max-w-6xl", "brief-wrap"], [1, "text-2xl", "font-medium", "text-black", "leading-10", "mb-6"], [1, "text-lg", "text-black", "leading-10"], ["href", "https://www.youtube.com/jidelambo", "target", "_blank", 1, "text-black", "font-semibold", "underline", "hover:text-purple-600"], ["routerLink", "/design-process", 1, "text-black", "font-semibold", "underline", "hover:text-purple-600"], ["href", "https://www.linkedin.com/in/jidelambo/", "target", "_blank", 1, "text-black", "font-semibold", "underline", "hover:text-purple-600"], ["href", "https://medium.com/@jidelambo", "target", "_blank", 1, "text-black", "font-semibold", "underline", "hover:text-purple-600"], ["href", "https://github.com/JideLambo/portfolio", "target", "_blank", 1, "text-black", "font-semibold", "underline", "hover:text-purple-600"]], template: function HomeBriefsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \uD83D\uDC4B\uD83C\uDFFE Hi, my name is Jide (pronounced: Ji-Day), and I am a Design Engineer (I specialize in the disciplines of both design and development). I am passionate about solving both user and business problems. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "article", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "I have worked on projects in a variety of areas such as mobility transportation, banking, AI- driven tech, and cloud-based platforms.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " This is the link to my ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "youtube channel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " where I stream about design, development and generally living in Finland. You can also read about my ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "design and dev process.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " You can check my work progress on ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Linkedin here");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " and also read my articles ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "on medium");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " where I write about design, and web development. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "I also designed, and developed this portfolio. You can find the source code in this ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "github repo");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, ".");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".brief-wrap[_ngcontent-%COMP%] {\n  width: 60%;\n}\n@media only screen and (min-width: 320px) and (max-width: 480px) {\n  .brief-wrap[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media only screen and (min-width: 481px) and (max-width: 1120px) {\n  .brief-wrap[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.brief-wrap[_ngcontent-%COMP%]   .brief-desc[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 2rem;\n}\n.brief-wrap[_ngcontent-%COMP%]   .brief-desc[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fa416d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaWRlbGFtYm8vUmVwby9wb3J0Zm9saW8vc3JjL2FwcC9jb21wb25lbnRzL2hvbWUtYnJpZWZzL2hvbWUtYnJpZWZzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUtYnJpZWZzL2hvbWUtYnJpZWZzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQ0NGO0FEQ0U7RUFIRjtJQUlJLFdBQUE7RUNFRjtBQUNGO0FEQUU7RUFQRjtJQVFJLFdBQUE7RUNHRjtBQUNGO0FEREU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0dKO0FEREk7RUFDRSxjQUFBO0FDR04iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUtYnJpZWZzL2hvbWUtYnJpZWZzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyaWVmLXdyYXAge1xuICB3aWR0aDogNjAlO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDExMjBweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmJyaWVmLWRlc2Mge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuXG4gICAgYSB7XG4gICAgICBjb2xvcjogI2ZhNDE2ZDtcbiAgICB9XG4gIH1cbn1cbiIsIi5icmllZi13cmFwIHtcbiAgd2lkdGg6IDYwJTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuYnJpZWYtd3JhcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiAxMTIwcHgpIHtcbiAgLmJyaWVmLXdyYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uYnJpZWYtd3JhcCAuYnJpZWYtZGVzYyB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG59XG4uYnJpZWYtd3JhcCAuYnJpZWYtZGVzYyBhIHtcbiAgY29sb3I6ICNmYTQxNmQ7XG59Il19 */"] });
    return HomeBriefsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeBriefsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-briefs',
                templateUrl: './home-briefs.component.html',
                styleUrls: ['./home-briefs.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var _c0 = function () { return { exact: true }; };
var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
    PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 15, vars: 2, consts: [[1, "container"], [1, "boxed"], [1, "row-message"], [1, "header-menu-wrap"], [1, "info"], ["routerLink", "/", "routerLinkActive", "active", 3, "routerLinkActiveOptions"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " 404 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " I couldn't find this page. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Maybe it's out there, somewhere.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "You can always find useful things on the ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "homepage");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".boxed[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  width: 60%;\n  margin-left: auto;\n  margin-right: auto;\n}\n@media only screen and (min-width: 320px) and (max-width: 480px) {\n  .boxed[_ngcontent-%COMP%] {\n    width: 95%;\n    margin: 50px auto 0;\n  }\n}\n.boxed[_ngcontent-%COMP%]   .row-message[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 50px;\n}\n@media only screen and (min-width: 320px) and (max-width: 480px) {\n  .boxed[_ngcontent-%COMP%]   .row-message[_ngcontent-%COMP%] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    margin-bottom: 20px;\n  }\n}\n.boxed[_ngcontent-%COMP%]   .row-message[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 10rem;\n  background-color: #d4d4d4;\n  padding: 20px;\n  margin: 0;\n  margin-right: 40px;\n}\n@media only screen and (min-width: 320px) and (max-width: 480px) {\n  .boxed[_ngcontent-%COMP%]   .row-message[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-right: 0;\n    font-size: 8rem;\n  }\n}\n.boxed[_ngcontent-%COMP%]   .row-message[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n@media only screen and (min-width: 320px) and (max-width: 480px) {\n  .boxed[_ngcontent-%COMP%]   .row-message[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n.boxed[_ngcontent-%COMP%]   .header-menu-wrap[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n@media only screen and (min-width: 320px) and (max-width: 480px) {\n  .boxed[_ngcontent-%COMP%]   .header-menu-wrap[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n.boxed[_ngcontent-%COMP%]   .header-menu-wrap[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #FA416D;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaWRlbGFtYm8vUmVwby9wb3J0Zm9saW8vc3JjL2FwcC9jb21wb25lbnRzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0k7RUFOSjtJQU9RLFVBQUE7SUFDQSxtQkFBQTtFQ0VOO0FBQ0Y7QURBSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7QUNFUjtBREFRO0VBTko7SUFPUSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7SUFDQSxtQkFBQTtFQ0dWO0FBQ0Y7QUREUTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDR1o7QUREWTtFQVBKO0lBUVEsZUFBQTtJQUNBLGVBQUE7RUNJZDtBQUNGO0FERFE7RUFDSSxlQUFBO0FDR1o7QUREWTtFQUhKO0lBSVEsZUFBQTtFQ0lkO0FBQ0Y7QURJWTtFQUNJLGlCQUFBO0FDRmhCO0FESWdCO0VBSEo7SUFJUSxlQUFBO0VDRGxCO0FBQ0Y7QURJWTtFQUNJLGNBQUE7QUNGaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveGVkIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIG1hcmdpbjogNTBweCBhdXRvIDA7XG4gICAgfVxuXG4gICAgLnJvdy1tZXNzYWdlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDRkNDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG5cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XG5cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5oZWFkZXItbWVudS13cmFwIHtcblxuICAgICAgICAuaW5mbyB7XG5cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuXG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkE0MTZEO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG59IiwiLmJveGVkIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuYm94ZWQge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luOiA1MHB4IGF1dG8gMDtcbiAgfVxufVxuLmJveGVkIC5yb3ctbWVzc2FnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuYm94ZWQgLnJvdy1tZXNzYWdlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn1cbi5ib3hlZCAucm93LW1lc3NhZ2UgaDEge1xuICBmb250LXNpemU6IDEwcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkNGQ0O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuYm94ZWQgLnJvdy1tZXNzYWdlIGgxIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgZm9udC1zaXplOiA4cmVtO1xuICB9XG59XG4uYm94ZWQgLnJvdy1tZXNzYWdlIGgyIHtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5ib3hlZCAucm93LW1lc3NhZ2UgaDIge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxufVxuLmJveGVkIC5oZWFkZXItbWVudS13cmFwIC5pbmZvIHAge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuYm94ZWQgLmhlYWRlci1tZW51LXdyYXAgLmluZm8gcCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG4uYm94ZWQgLmhlYWRlci1tZW51LXdyYXAgLmluZm8gYSB7XG4gIGNvbG9yOiAjRkE0MTZEO1xufSJdfQ== */"] });
    return PageNotFoundComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/recent-work/recent-work.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/recent-work/recent-work.component.ts ***!
  \*****************************************************************/
/*! exports provided: RecentWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentWorkComponent", function() { return RecentWorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var _c0 = function (a0) { return { "background-color": a0 }; };
function RecentWorkComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "View Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var work_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", work_r1.url, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, work_r1.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/img/hero/", work_r1.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", work_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", work_r1.url, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](work_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](work_r1.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", work_r1.url, "");
} }
var RecentWorkComponent = /** @class */ (function () {
    function RecentWorkComponent() {
        this.works = [
            {
                url: "bcaster-dashboard",
                name: "BCaster OY, Finland",
                desc: "First scalable, channel-independent platform for brands to activate and engage users.",
                img: "ICC-Dashboard-banner.png",
                color: "#162447",
            },
            {
                url: "GIGM",
                name: "GIGM.com",
                desc: "Changing the road transport system approach in Nigeria",
                img: "gigm-web.png",
                color: "rgb(250, 211, 224)",
            },
            {
                url: "couponcooler",
                name: "Coupon Cooler",
                desc: "Coupon deals, and discount for shoppers on mobile experience",
                img: "couponcooler.png",
                color: "#fdf182",
            },
        ];
    }
    RecentWorkComponent.prototype.ngOnInit = function () { };
    RecentWorkComponent.ɵfac = function RecentWorkComponent_Factory(t) { return new (t || RecentWorkComponent)(); };
    RecentWorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecentWorkComponent, selectors: [["app-recent-work"]], decls: 5, vars: 1, consts: [[1, "container", "content-thumbnails"], [1, "text-2xl", "font-bold", "mb-4"], [1, "thumbs-wrap"], ["class", "recent-work-wrap", 4, "ngFor", "ngForOf"], [1, "recent-work-wrap"], [3, "routerLink"], [1, "img-wrapper", 3, "ngStyle"], ["loading", "lazy", 3, "src", "alt"], [1, "work-title"], [1, "view-project", "hover:underline", 3, "routerLink"]], template: function RecentWorkComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Some of my work");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RecentWorkComponent_div_4_Template, 12, 10, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.works);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".content-thumbnails[_ngcontent-%COMP%] {\n  margin-top: 60px;\n}\n\n.thumbs-wrap[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  flex-wrap: wrap;\n}\n\n.thumbs-wrap[_ngcontent-%COMP%]   .recent-work-wrap[_ngcontent-%COMP%] {\n  width: 32%;\n  margin-bottom: 50px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 480px) {\n  .thumbs-wrap[_ngcontent-%COMP%]   .recent-work-wrap[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.thumbs-wrap[_ngcontent-%COMP%]   .recent-work-wrap[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  box-shadow: 0 13px 19px -1px rgba(120, 120, 120, 0.75);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 280px;\n  margin-bottom: 10px;\n  cursor: pointer;\n  -webkit-transition: box-shadow 1s;\n  transition: box-shadow 1s;\n  border: 6px solid #444444;\n}\n\n.thumbs-wrap[_ngcontent-%COMP%]   .recent-work-wrap[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5);\n}\n\n.thumbs-wrap[_ngcontent-%COMP%]   .recent-work-wrap[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.thumbs-wrap[_ngcontent-%COMP%]   .recent-work-wrap[_ngcontent-%COMP%]   .work-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.thumbs-wrap[_ngcontent-%COMP%]   .recent-work-wrap[_ngcontent-%COMP%]   .work-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 400;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n\n.thumbs-wrap[_ngcontent-%COMP%]   .recent-work-wrap[_ngcontent-%COMP%]   .work-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #333333;\n}\n\n.thumbs-wrap[_ngcontent-%COMP%]   .recent-work-wrap[_ngcontent-%COMP%]   .work-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  margin-top: 0;\n}\n\n.thumbs-wrap[_ngcontent-%COMP%]   .recent-work-wrap[_ngcontent-%COMP%]   .work-title[_ngcontent-%COMP%]   .view-project[_ngcontent-%COMP%] {\n  color: #FA416D;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaWRlbGFtYm8vUmVwby9wb3J0Zm9saW8vc3JjL2FwcC9jb21wb25lbnRzL3JlY2VudC13b3JrL3JlY2VudC13b3JrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3JlY2VudC13b3JrL3JlY2VudC13b3JrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENJO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0FDQ1I7O0FEQ1E7RUFKSjtJQUtRLFdBQUE7RUNFVjtBQUNGOztBREFRO0VBQ0kseUJBQUE7RUFDQSxzREFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFBQSx5QkFBQTtFQUNBLHlCQUFBO0FDRVo7O0FEQVk7RUFDSSwwQ0FBQTtBQ0VoQjs7QURDWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0NoQjs7QURHUTtFQUNJLGtCQUFBO0FDRFo7O0FER1k7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0RoQjs7QURHZ0I7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUNEcEI7O0FESVk7RUFDSSxpQkFBQTtFQUNBLGFBQUE7QUNGaEI7O0FESVk7RUFDSSxjQUFBO0FDRmhCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWNlbnQtd29yay9yZWNlbnQtd29yay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LXRodW1ibmFpbHMge1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG59XG5cbi50aHVtYnMtd3JhcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgLnJlY2VudC13b3JrLXdyYXAge1xuICAgICAgICB3aWR0aDogMzIlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuaW1nLXdyYXBwZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTNweCAxOXB4IC0xcHggaHNsYSgwLDAlLDQ3JSwuNzUpO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiAyODBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDFzO1xuICAgICAgICAgICAgYm9yZGVyOiA2cHggc29saWQgIzQ0NDQ0NDtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLndvcmstdGl0bGUge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnZpZXctcHJvamVjdCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNGQTQxNkQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmNvbnRlbnQtdGh1bWJuYWlscyB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59XG5cbi50aHVtYnMtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi50aHVtYnMtd3JhcCAucmVjZW50LXdvcmstd3JhcCB7XG4gIHdpZHRoOiAzMiU7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnRodW1icy13cmFwIC5yZWNlbnQtd29yay13cmFwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLnRodW1icy13cmFwIC5yZWNlbnQtd29yay13cmFwIC5pbWctd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgMTNweCAxOXB4IC0xcHggcmdiYSgxMjAsIDEyMCwgMTIwLCAwLjc1KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMjgwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxcztcbiAgYm9yZGVyOiA2cHggc29saWQgIzQ0NDQ0NDtcbn1cbi50aHVtYnMtd3JhcCAucmVjZW50LXdvcmstd3JhcCAuaW1nLXdyYXBwZXI6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDNweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4udGh1bWJzLXdyYXAgLnJlY2VudC13b3JrLXdyYXAgLmltZy13cmFwcGVyIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cbi50aHVtYnMtd3JhcCAucmVjZW50LXdvcmstd3JhcCAud29yay10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50aHVtYnMtd3JhcCAucmVjZW50LXdvcmstd3JhcCAud29yay10aXRsZSBoMyB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnRodW1icy13cmFwIC5yZWNlbnQtd29yay13cmFwIC53b3JrLXRpdGxlIGgzIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuLnRodW1icy13cmFwIC5yZWNlbnQtd29yay13cmFwIC53b3JrLXRpdGxlIHAge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi50aHVtYnMtd3JhcCAucmVjZW50LXdvcmstd3JhcCAud29yay10aXRsZSAudmlldy1wcm9qZWN0IHtcbiAgY29sb3I6ICNGQTQxNkQ7XG59Il19 */"] });
    return RecentWorkComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecentWorkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-recent-work",
                templateUrl: "./recent-work.component.html",
                styleUrls: ["./recent-work.component.scss"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/works-hero/works-hero.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/works-hero/works-hero.component.ts ***!
  \***************************************************************/
/*! exports provided: WorksHeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksHeroComponent", function() { return WorksHeroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");



function WorksHeroComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var hero_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/img/hero/", hero_r7.mock, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var WorksHeroComponent = /** @class */ (function () {
    function WorksHeroComponent() {
        this.heros = [
            { name: '', url: '', color: '#000000', mock: '' }
        ];
    }
    WorksHeroComponent.prototype.ngOnInit = function () {
    };
    WorksHeroComponent.ɵfac = function WorksHeroComponent_Factory(t) { return new (t || WorksHeroComponent)(); };
    WorksHeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorksHeroComponent, selectors: [["app-works-hero"]], decls: 1, vars: 1, consts: [["class", "work-hero-wrap", 4, "ngFor", "ngForOf"], [1, "work-hero-wrap"], [1, "hero-bckgrnd", 2, "background-color", "#1f2225"], ["alt", "", "loading", "lazy", 3, "src"]], template: function WorksHeroComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WorksHeroComponent_div_0_Template, 3, 1, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.heros);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".work-hero-wrap[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n\n.hero-bckgrnd[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaWRlbGFtYm8vUmVwby9wb3J0Zm9saW8vc3JjL2FwcC9jb21wb25lbnRzL3dvcmtzLWhlcm8vd29ya3MtaGVyby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy93b3Jrcy1oZXJvL3dvcmtzLWhlcm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd29ya3MtaGVyby93b3Jrcy1oZXJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndvcmstaGVyby13cmFwIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuLmhlcm8tYmNrZ3JuZCB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSIsIi53b3JrLWhlcm8td3JhcCB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5oZXJvLWJja2dybmQge1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */"] });
    return WorksHeroComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorksHeroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-works-hero',
                templateUrl: './works-hero.component.html',
                styleUrls: ['./works-hero.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _components_footer_social_footer_social_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer-social/footer-social.component */ "./src/app/components/footer-social/footer-social.component.ts");





function AboutComponent_li_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var skill_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", skill_r5.name, " ");
} }
var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.skills = [
            { name: "UX Thinking & Research techniques." },
            { name: "User Interface design for web and mobile apps." },
            { name: "Front-end development: HTML5, CSS3, JavaScript, React, Vue" },
            { name: "Flow diagrams, Wireframes & Prototyping." },
            { name: "Mobile & Web Responsive design." },
            { name: "Proficient with Sketchapp, figma and other prototyping tools." },
            { name: "User testing & web accessibility." },
        ];
    }
    AboutComponent.prototype.ngOnInit = function () {
        console.log("about page here");
    };
    AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 31, vars: 1, consts: [[1, "container", "py-4", "md:py-20"], [1, "about-wrap", "max-w-4xl"], [1, "text-2xl", "font-medium", "leading-10", "mb-6"], ["src", "../../../assets/img/jidelambo.JPG", "loading", "lazy", "alt", "Jide Lambo", 1, "float-right", "ml-4", "my-2", "h-64", "w-full", "md:w-64", "object-cover", "border", "shadow-md"], [1, "text-lg", "leading-10"], [1, "mb-6"], [1, "about-wrap", "mt-20"], [1, "text-2xl", "font-bold", "mb-4"], [1, "skills-wrap"], [1, "skills-list", "list-disc", "pl-4"], ["class", "text-lg leading-10", 4, "ngFor", "ngForOf"], [1, "know-me-wrap"], [1, "know-me"], ["routerLink", "/design-process"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hi again, \uD83D\uDE42 \uD83E\uDD1F");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "article", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " I\u2019m a Helsinki-based product designer with Front-end development skills. I've had the opportunity to design products in the space of digital media agency, Saas tech, fintech (banking), road transportation, AI-driven platform, and cloud-based tech products. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " My journey started as a self-taught designer while working at Crawford University, Nigeria in 2012, then I joined Deefrent - A digital agency in 2015 where I worked on clients projects ranging from e-commerce websites to portfolio websites, to Government web portals. Later in 2016, I joined GIGM.com - the biggest road transportation company in Nigeria, and led the design team in designing and developing the customer's booking platform both on mobile and web. I also focused on designing usable web experience for in-house tools. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " After my time at GIGM.com, I joined Guaranty Trust Bank, where my main focus was building the customer's mobile banking app called GTWorld. I also worked with the team that designed a well documented API so Fintech companies can build custom payments experiences. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " In late 2018, I joined BCaster.com - a Finland startup that automates user generating contents for businesses. I led the design team where I helped guide the user experience for both the customers and in-house products. As a startup team, I took up designing and developing user interfaces and experiences for the customer's dashboard, and Web-apps. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " In 2020, I joined the Intergalactico design team with Nordcloud. As a cloud-first company, my role has been focused on designing user experiences for cloud-based applications. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " My work gives me vast experience in design reviews, product design, web accessibility, front-end web development, user research, and usability testing. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Outside work, I enjoy taking city photographs, bike riding for long miles, and horseback riding. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Relevant Skills & Tools \uD83D\uDD27");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AboutComponent_li_25_Template, 2, 1, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Read about my design process");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-footer-social");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _components_footer_social_footer_social_component__WEBPACK_IMPORTED_MODULE_3__["FooterSocialComponent"]], styles: ["@media only screen and (min-width: 320px) and (max-width: 480px) {\n  .about-wrap[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n}\n\n.skills-wrap[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);\n  padding: 20px;\n  height: auto;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 480px) {\n  .skills-wrap[_ngcontent-%COMP%] {\n    height: 100%;\n    margin-bottom: 20px;\n  }\n}\n\n.skills-wrap[_ngcontent-%COMP%]   .skills-list[_ngcontent-%COMP%] {\n  -webkit-column-count: 2;\n     -moz-column-count: 2;\n          column-count: 2;\n  margin: 0;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 480px) {\n  .skills-wrap[_ngcontent-%COMP%]   .skills-list[_ngcontent-%COMP%] {\n    -webkit-column-count: 1;\n       -moz-column-count: 1;\n            column-count: 1;\n  }\n}\n\n@media only screen and (min-width: 320px) and (max-width: 480px) {\n  .skills-wrap[_ngcontent-%COMP%]   .skills-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: disc;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaWRlbGFtYm8vUmVwby9wb3J0Zm9saW8vc3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFERjtJQUVJLGdCQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENFO0VBTkY7SUFPSSxZQUFBO0lBQ0EsbUJBQUE7RUNFRjtBQUNGOztBREFFO0VBQ0UsdUJBQUE7S0FBQSxvQkFBQTtVQUFBLGVBQUE7RUFDQSxTQUFBO0FDRUo7O0FEQUk7RUFKRjtJQUtJLHVCQUFBO09BQUEsb0JBQUE7WUFBQSxlQUFBO0VDR0o7QUFDRjs7QURBTTtFQURGO0lBRUksZ0JBQUE7RUNHTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQtd3JhcCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbn1cblxuLnNraWxscy13cmFwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBwYWRkaW5nOiAyMHB4O1xuICBoZWlnaHQ6IGF1dG87XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICAuc2tpbGxzLWxpc3Qge1xuICAgIGNvbHVtbi1jb3VudDogMjtcbiAgICBtYXJnaW46IDA7XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgIGNvbHVtbi1jb3VudDogMTtcbiAgICB9XG5cbiAgICBsaSB7XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogZGlzYztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuYWJvdXQtd3JhcCB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxufVxuXG4uc2tpbGxzLXdyYXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuc2tpbGxzLXdyYXAge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59XG4uc2tpbGxzLXdyYXAgLnNraWxscy1saXN0IHtcbiAgY29sdW1uLWNvdW50OiAyO1xuICBtYXJnaW46IDA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnNraWxscy13cmFwIC5za2lsbHMtbGlzdCB7XG4gICAgY29sdW1uLWNvdW50OiAxO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnNraWxscy13cmFwIC5za2lsbHMtbGlzdCBsaSB7XG4gICAgbGlzdC1zdHlsZTogZGlzYztcbiAgfVxufSJdfQ== */"] });
    return AboutComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-about",
                templateUrl: "./about.component.html",
                styleUrls: ["./about.component.scss"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/design-process/design-process.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/design-process/design-process.component.ts ***!
  \******************************************************************/
/*! exports provided: DesignProcessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignProcessComponent", function() { return DesignProcessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _components_footer_social_footer_social_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/footer-social/footer-social.component */ "./src/app/components/footer-social/footer-social.component.ts");




var DesignProcessComponent = /** @class */ (function () {
    function DesignProcessComponent() {
    }
    DesignProcessComponent.prototype.ngOnInit = function () {
    };
    DesignProcessComponent.ɵfac = function DesignProcessComponent_Factory(t) { return new (t || DesignProcessComponent)(); };
    DesignProcessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DesignProcessComponent, selectors: [["app-design-process"]], decls: 35, vars: 0, consts: [[1, "container", "mx-auto", "py-10", "md:py-16"], [1, "max-w-4xl", "project-desc"], [1, "desc-more", "mb-8"], [1, "text-2xl", "font-semibold", "leading-10"], [1, "desc-more"], [1, "text-xl", "font-semibold"], [1, "text-lg", "leading-10"], [1, "know-me-wrap"], [1, "know-me"], ["routerLink", "/about"]], template: function DesignProcessComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My Design Process \uD83D\uDCC7");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Design Research");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " I identify my users and try to find their needs. I also try to learn of the context of their problem. It gives me an insight into the problems we're trying to solve. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Generate Ideas");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " After identifying these problems, I come up with ideas by observing, interviewing, tracking and surveys. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Define all ideas");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " In this phase, I make sense of all the ideas collected by using the wireframes or low-fi designs. This helps the team make decisions on which idea solves our user's problems. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Prototyping");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Prototypes are designed and I can demonstrate the idea to colleagues, stackholders and a user-group. This phase helps me answer specific questions, and get feedback from people. By testing with users, it helps me gain much insight into what works, and what doesn\u2019t work, and I can iterate the design. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Front-end (UI) Development");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " I can implement prototype (UX) designs as UI features, components and functionalities. I can also plan and design implementation for multilingual frontend solution. Developing and maintaining good coding practices for better web accessibility is also my focus and interest. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Know more about me");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-footer-social");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _components_footer_social_footer_social_component__WEBPACK_IMPORTED_MODULE_2__["FooterSocialComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rlc2lnbi1wcm9jZXNzL2Rlc2lnbi1wcm9jZXNzLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return DesignProcessComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DesignProcessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-design-process',
                templateUrl: './design-process.component.html',
                styleUrls: ['./design-process.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _components_home_briefs_home_briefs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/home-briefs/home-briefs.component */ "./src/app/components/home-briefs/home-briefs.component.ts");
/* harmony import */ var _components_recent_work_recent_work_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/recent-work/recent-work.component */ "./src/app/components/recent-work/recent-work.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _components_footer_social_footer_social_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/footer-social/footer-social.component */ "./src/app/components/footer-social/footer-social.component.ts");






var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
    HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 8, vars: 0, consts: [[1, "know-me-wrap"], [1, "know-me"], ["routerLink", "/playground", 1, "hover:underline"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-home-briefs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-recent-work");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Check playground for my random work");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footer-social");
        } }, directives: [_components_home_briefs_home_briefs_component__WEBPACK_IMPORTED_MODULE_1__["HomeBriefsComponent"], _components_recent_work_recent_work_component__WEBPACK_IMPORTED_MODULE_2__["RecentWorkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _components_footer_social_footer_social_component__WEBPACK_IMPORTED_MODULE_4__["FooterSocialComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
    return HomePageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/playground/playground.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/playground/playground.component.ts ***!
  \**********************************************************/
/*! exports provided: PlaygroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaygroundComponent", function() { return PlaygroundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _components_footer_social_footer_social_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/footer-social/footer-social.component */ "./src/app/components/footer-social/footer-social.component.ts");




var PlaygroundComponent = /** @class */ (function () {
    function PlaygroundComponent() {
    }
    PlaygroundComponent.prototype.ngOnInit = function () {
    };
    PlaygroundComponent.ɵfac = function PlaygroundComponent_Factory(t) { return new (t || PlaygroundComponent)(); };
    PlaygroundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlaygroundComponent, selectors: [["app-playground"]], decls: 54, vars: 0, consts: [[1, "container", "py-10", "md:py-16"], [1, "desc-more", "mb-8"], [1, "text-2xl", "font-medium", "leading-10", "mb-6"], [1, "text-lg", "leading-10"], [1, "gridWrapper"], [1, "wrapper", "shadow"], ["href", "https://jidelambo.medium.com/why-you-need-design-engineers-on-your-team-81378ec36e4d", "target", "_blank", "rel", "noopener noreferrer", 1, "grid-item-block", "flex", "flex-col", "justify-end", "h-full", 2, "background-image", "url(../../../assets/img/playground/workstation-design-engineer.jpeg)"], [1, "z-10", "p-6", "bg-black", "bg-opacity-75"], [1, "text-white", "font-bold", "capitalize"], [1, "text-white"], ["href", "https://jidelambo.medium.com/why-semantics-are-important-658a4a24248e", "target", "_blank", "rel", "noopener noreferrer", 1, "grid-item-block", "flex", "flex-col", "justify-end", "h-full", 2, "background-image", "url(../../../assets/img/playground/semantics.png)"], ["href", "https://css-tricks.com/new-in-chrome-css-overview/", "target", "_blank", "rel", "noopener noreferrer", 1, "grid-item-block", "flex", "flex-col", "justify-end", "h-full", 2, "background-image", "url(../../../assets/img/playground/css-overview-tailwindcss.png)"], ["href", "https://www.youtube.com/watch?v=OH0-Ky4oMpU", "target", "_blank", "rel", "noopener noreferrer", 1, "grid-item-block", "flex", "flex-col", "justify-end", "h-full", 2, "background-image", "url(../../../assets/img/playground/stream-highlight.png)"], ["href", "https://codeburst.io/understanding-css-flexbox-d6162885fefe", "target", "_blank", "rel", "noopener noreferrer", 1, "grid-item-block", "flex", "flex-col", "justify-end", "h-full", 2, "background-image", "url(../../../assets/img/playground/flexbox-css.png)"], ["href", "https://jidelambo.medium.com/the-relationship-between-designers-and-engineers-4fd657515b27", "target", "_blank", "rel", "noopener noreferrer", 1, "grid-item-block", "flex", "flex-col", "justify-end", "h-full", 2, "background-image", "url(../../../assets/img/playground/relationship-design-engineer.jpeg)"], [1, "know-me-wrap"], [1, "know-me"], ["routerLink", "/design-process"]], template: function PlaygroundComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "playground \uD83D\uDCC7");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " This is my space where I share random work, unfinished projects, and articles. I get to share things I learn without being vulnerable. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Why you need design engineers on your team. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Reference: jidelambo.medium.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Why semantics are important. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Reference: jidelambo.medium.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " The new CSS overview feature on Chrome ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Reference: css-tricks");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " An highlight of live stream I made for setting up CSS grid with Tailwind ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Reference: youtube.com/jidelambo");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Understanding CSS Flexbox ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Reference: jidelambo.medium.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " The relationship between designers and engineers. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Reference: jidelambo.medium.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Read about my design process");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "app-footer-social");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _components_footer_social_footer_social_component__WEBPACK_IMPORTED_MODULE_2__["FooterSocialComponent"]], styles: [".gridWrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-rows: minmax(260px, auto);\n  grid-gap: 25px;\n}\n\n\n\n.wrapper[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  z-index: 2;\n  -webkit-transition: all 0.5s ease-in;\n  transition: all 0.5s ease-in;\n}\n\n\n\n.wrapper[_ngcontent-%COMP%]:nth-of-type(1) {\n  grid-column: 1/3;\n  grid-row: 1/3;\n}\n\n\n\n.grid-item-block[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: 50%;\n  background-repeat: no-repeat;\n}\n\n.grid-item-block[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  background: var(--main-color-pink);\n  opacity: 0;\n  visibility: hidden;\n}\n\n\n\n.wrapper[_ngcontent-%COMP%]:hover   .grid-item-block[_ngcontent-%COMP%]:before {\n  opacity: 0.2;\n  visibility: visible;\n}\n\n\n\n.bg1[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n}\n\n.bg2[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n}\n\n.bg3[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n}\n\n.bg4[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n}\n\n.bg5[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 414px) {\n  .gridWrapper[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .wrapper[_ngcontent-%COMP%]:nth-of-type(1) {\n    grid-column: 1;\n    grid-row: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaWRlbGFtYm8vUmVwby9wb3J0Zm9saW8vc3JjL2FwcC9wYWdlcy9wbGF5Z3JvdW5kL3BsYXlncm91bmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BsYXlncm91bmQvcGxheWdyb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBLFdBQUE7O0FBQ0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBRUEsb0NBQUE7RUFBQSw0QkFBQTtBQ0FGOztBREdBLFdBQUE7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUNBRjs7QURHQSxXQUFBOztBQUNBO0VBQ0Usc0JBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FDQUY7O0FERUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxNQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQSxZQUFBOztBQUNBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0EsV0FBQTs7QUFDQTtFQUNFLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsbUJBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtBQ0FGOztBREVBO0VBQ0U7SUFDRSwwQkFBQTtFQ0NGOztFRENBO0lBQ0UsY0FBQTtJQUNBLFdBQUE7RUNFRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGxheWdyb3VuZC9wbGF5Z3JvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWRXcmFwcGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgyNjBweCwgYXV0byk7XG4gIGdyaWQtZ2FwOiAyNXB4O1xufVxuXG4vKiBzdGVwIDQgKi9cbi53cmFwcGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcblxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xufVxuXG4vKiBzdGVwIDYgKi9cbi53cmFwcGVyOm50aC1vZi10eXBlKDEpIHtcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICBncmlkLXJvdzogMSAvIDM7XG59XG5cbi8qIHN0ZXAgOSAqL1xuLmdyaWQtaXRlbS1ibG9jayB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5ncmlkLWl0ZW0tYmxvY2s6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3ItcGluayk7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLyogc3RlcCAxMCAqL1xuLndyYXBwZXI6aG92ZXIgLmdyaWQtaXRlbS1ibG9jazpiZWZvcmUge1xuICBvcGFjaXR5OiAwLjI7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi8qIHN0ZXAgNSAqL1xuLmJnMSB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG5cbi5iZzIge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xufVxuXG4uYmczIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbn1cblxuLmJnNCB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG5cbi5iZzUge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQxNHB4KSB7XG4gIC5ncmlkV3JhcHBlciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbiAgLndyYXBwZXI6bnRoLW9mLXR5cGUoMSkge1xuICAgIGdyaWQtY29sdW1uOiAxO1xuICAgIGdyaWQtcm93OiAxO1xuICB9XG59XG4iLCIuZ3JpZFdyYXBwZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBncmlkLWF1dG8tcm93czogbWlubWF4KDI2MHB4LCBhdXRvKTtcbiAgZ3JpZC1nYXA6IDI1cHg7XG59XG5cbi8qIHN0ZXAgNCAqL1xuLndyYXBwZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xufVxuXG4vKiBzdGVwIDYgKi9cbi53cmFwcGVyOm50aC1vZi10eXBlKDEpIHtcbiAgZ3JpZC1jb2x1bW46IDEvMztcbiAgZ3JpZC1yb3c6IDEvMztcbn1cblxuLyogc3RlcCA5ICovXG4uZ3JpZC1pdGVtLWJsb2NrIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uZ3JpZC1pdGVtLWJsb2NrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvci1waW5rKTtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4vKiBzdGVwIDEwICovXG4ud3JhcHBlcjpob3ZlciAuZ3JpZC1pdGVtLWJsb2NrOmJlZm9yZSB7XG4gIG9wYWNpdHk6IDAuMjtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLyogc3RlcCA1ICovXG4uYmcxIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbn1cblxuLmJnMiB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG5cbi5iZzMge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xufVxuXG4uYmc0IHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbn1cblxuLmJnNSB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xuICAuZ3JpZFdyYXBwZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLndyYXBwZXI6bnRoLW9mLXR5cGUoMSkge1xuICAgIGdyaWQtY29sdW1uOiAxO1xuICAgIGdyaWQtcm93OiAxO1xuICB9XG59Il19 */"] });
    return PlaygroundComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaygroundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-playground',
                templateUrl: './playground.component.html',
                styleUrls: ['./playground.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/work-bcaster/work-bcaster.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/work-bcaster/work-bcaster.component.ts ***!
  \**************************************************************/
/*! exports provided: WorkBcasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkBcasterComponent", function() { return WorkBcasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _components_footer_social_footer_social_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer-social/footer-social.component */ "./src/app/components/footer-social/footer-social.component.ts");





function WorkBcasterComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var hero_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/img/hero/", hero_r13.mock, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", hero_r13.mock);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/img/hero/", hero_r13.mockSm, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", hero_r13.mockSm);
} }
var WorkBcasterComponent = /** @class */ (function () {
    function WorkBcasterComponent() {
        this.heros = [
            { name: 'BCaster', url: '', color: '#000000', mock: 'bcaster-mobile.png', mockSm: 'bcaster-dashboard.png' }
        ];
    }
    WorkBcasterComponent.prototype.ngOnInit = function () {
    };
    WorkBcasterComponent.ɵfac = function WorkBcasterComponent_Factory(t) { return new (t || WorkBcasterComponent)(); };
    WorkBcasterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkBcasterComponent, selectors: [["app-work-bcaster"]], decls: 53, vars: 1, consts: [[1, "container", "mx-auto"], [1, "work-page-title"], ["class", "work-hero-wrap", 4, "ngFor", "ngForOf"], [1, "project-desc"], [1, "desc-more"], [1, "desc-title"], [1, "text-lg", "leading-10"], [1, "text-xl", "font-semibold"], [1, "flex", "justify-between", "flex-wrap", "mb-2"], [1, "p-2", "w-full", "md:w-1/3"], ["src", "../../../assets/img/recent-works/bc/one-min.png", "alt", "Web app", "loading", "lazy"], ["src", "../../../assets/img/recent-works/bc/two-min.png", "alt", "Web app", "loading", "lazy"], ["src", "../../../assets/img/recent-works/bc/three-min.png", "alt", "Web app", "loading", "lazy"], [1, "flex", "justify-between", "flex-wrap"], [1, "p-2", "w-full", "md:w-1/2"], ["src", "../../../assets/img/recent-works/bc/dashboard-card-min.png", "alt", "Web app", "loading", "lazy", 1, "shadow-lg"], ["src", "../../../assets/img/recent-works/bc/dashboard-list-min.png", "alt", "Web app", "loading", "lazy", 1, "shadow-lg"], ["src", "../../../assets/img/recent-works/bc/dashboard-advanced-filter-min.png", "alt", "Web app", "loading", "lazy", 1, "shadow-lg"], ["src", "../../../assets/img/recent-works/bc/dashboard-media-modal-min.png", "alt", "Web app", "loading", "lazy", 1, "shadow-lg"], [1, "know-me-wrap"], [1, "know-me"], ["routerLink", "/about"], [1, "work-hero-wrap"], [1, "hero-bckgrnd", 2, "background-color", "#ee8933"], ["loading", "lazy", 3, "src", "alt"]], template: function WorkBcasterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Case Study: BCaster");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WorkBcasterComponent_div_4_Template, 4, 4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "article", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About BCaster");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " BCaster provides tools for capturing media content (photos and videos) using her Web App camera. The content can then be uploaded to the dashboard, where it is automatically analyzed and tagged with AI. The media content is processed for easy search based on time, location, context, and media quality. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Challenge");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " How do you design a product that there's nothing like it in the market? As a typical user of a product; say, for instance, a Tesla Model 3 electric car. I can take photos or videos of myself driving my Tesla and post these media content on one or many of the social media apps. As a Tesla marketing manager, how can I curate these media content from our customers; especially when this content is mostly lost in the sea of posts on Facebook, Twitter, or Instagram. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " How do we design tools to help business owners get direct media content from their customers (of course, with consent), reward them for sharing, and use this content for advert and other business purposes. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Solution");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " My task was to understand the business goals, our client, and how the existing MVP works. As the design lead, I collaborated with the project managers, and engineers to highlight features to help our users. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " In identifying what our users needs, we built a BCaster Web App camera that can be easily integrated on the business owner's website and then used to take photos/videos. Furthermore, we built a dashboard tool where business owners can easily collect their customer's media content (with consent). This content will then be automatically analyzed with our AI algorithm and can be processed for easy search based on time, location, context, and media quality. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " I learned how best to present photos and videos on the web platform for our users. I also learned how best to design usable search features and data visualization. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Know more about me");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "app-footer-social");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.heros);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _components_footer_social_footer_social_component__WEBPACK_IMPORTED_MODULE_3__["FooterSocialComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dvcmstYmNhc3Rlci93b3JrLWJjYXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
    return WorkBcasterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkBcasterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-work-bcaster',
                templateUrl: './work-bcaster.component.html',
                styleUrls: ['./work-bcaster.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/work-couponcooler/work-couponcooler.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/work-couponcooler/work-couponcooler.component.ts ***!
  \************************************************************************/
/*! exports provided: WorkCouponcoolerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkCouponcoolerComponent", function() { return WorkCouponcoolerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _components_footer_social_footer_social_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer-social/footer-social.component */ "./src/app/components/footer-social/footer-social.component.ts");





function WorkCouponcoolerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var hero_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/img/hero/", hero_r11.mock, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/img/hero/", hero_r11.mockSm, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var WorkCouponcoolerComponent = /** @class */ (function () {
    function WorkCouponcoolerComponent() {
        this.heros = [
            { name: 'Coupon Cooler', url: '', color: '#000000', mock: 'couponcooler1.png', mockSm: 'couponcooler2.png' }
        ];
    }
    WorkCouponcoolerComponent.prototype.ngOnInit = function () {
    };
    WorkCouponcoolerComponent.ɵfac = function WorkCouponcoolerComponent_Factory(t) { return new (t || WorkCouponcoolerComponent)(); };
    WorkCouponcoolerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkCouponcoolerComponent, selectors: [["app-work-couponcooler"]], decls: 64, vars: 1, consts: [[1, "container", "mx-auto"], [1, "work-page-title"], ["class", "work-hero-wrap", 4, "ngFor", "ngForOf"], [1, "project-desc"], [1, "desc-more"], [1, "desc-title"], [1, "text-lg", "leading-10"], [1, "text-xl", "font-semibold"], [1, "list-disc"], [1, "mb-4"], [1, "flex", "justify-between", "flex-wrap", "mb-2"], [1, "p-2", "w-full", "md:w-1/3"], ["src", "../../../assets/img/recent-works/couponcooler/home.png", "alt", "couponcooler mobile web", "loading", "lazy"], ["src", "../../../assets/img/recent-works/couponcooler/recent-deals.png", "alt", "couponcooler", "loading", "lazy"], ["src", "../../../assets/img/recent-works/couponcooler/item-deal.png", "alt", "couponcooler", "loading", "lazy"], ["src", "../../../assets/img/recent-works/couponcooler/about-deal.png", "alt", "couponcooler", "loading", "lazy"], [1, "know-me-wrap"], [1, "know-me"], ["routerLink", "/about"], [1, "work-hero-wrap"], [1, "hero-bckgrnd", 2, "background-color", "#fdf182"], ["alt", "", "loading", "lazy", 3, "src"]], template: function WorkCouponcoolerComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Case Study: Coupon Cooler");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WorkCouponcoolerComponent_div_4_Template, 4, 2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "article", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Problem to be solved. Make shopping online with coupon deals very easy and interesting ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " The couponcooler.com on mobile experience is to address shoppers who search for interesting deals, and discounts. The business wanted a one-stop shop for shoppers. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " I worked with 5-man team (4 developers, 1 project manager). My role was to detect what problems exists, and propose a solution at the usability and interface level for web mobile only. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Project Approach");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " I asked my client a few questions like \u201CHow are the benefits of using coupons? What information is relevant for their shopping experience? And many other relevant questions...\u201D ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " I interviewed shoppers and workers of a few vendors site. I was able to have a deeper understanding of their needs. The shoppers needed to do quick search for items. Shoppers also needed to get first-hand information about available discounted deals. Shoppers wanted convenience while shopping. Defining the problems helped me gather ideas for features and other elements that will allow us solve the problems. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " With a reasonable amount of knowledge gathered, we brainstromed ideas like having menus categorized by Deals, Brands and Coupons. We also came up with ideas to filter available deals by how Recent and also how soon they\u2019ll be Expiring. Deals should have brief description and discocunt value. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " I designed Lo-Fi designs with these specific features and tested it within the business team and a small group of users. This experiment helped us to identify the possible solution for the problems identified earlier. At the end, we were able to have a better idea of how our real users would behave when interacting with the product. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Having understood how the users behaved with the Lo-Fi prototype, I designed a Hi-Fi prototype and we tested it again on our users. we had great feedback and continued iterating for best user experience. I coded the mockups using HTML, CSS and Javascript while all considering mobile responsiveness. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Relevant tools used");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ul", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Gather user\u2019s needs via Interviews and Questionnaire ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " User personas to identify our key stakeholder to design for. Card-sorting to help pin-point the common needs of our users. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Design prototypes with sketch. Test prototypes using Invision. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Code prototype in HTML, CSS, and Javascript. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Know more about me");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "app-footer-social");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.heros);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _components_footer_social_footer_social_component__WEBPACK_IMPORTED_MODULE_3__["FooterSocialComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dvcmstY291cG9uY29vbGVyL3dvcmstY291cG9uY29vbGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return WorkCouponcoolerComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkCouponcoolerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-work-couponcooler',
                templateUrl: './work-couponcooler.component.html',
                styleUrls: ['./work-couponcooler.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/work-gigm/work-gigm.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/work-gigm/work-gigm.component.ts ***!
  \********************************************************/
/*! exports provided: WorkGigmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkGigmComponent", function() { return WorkGigmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _components_footer_social_footer_social_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer-social/footer-social.component */ "./src/app/components/footer-social/footer-social.component.ts");





function WorkGigmComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var hero_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/img/hero/", hero_r9.mock, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/img/hero/", hero_r9.mockSm, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var WorkGigmComponent = /** @class */ (function () {
    function WorkGigmComponent() {
        this.heros = [
            { name: 'GIGM', url: '', color: '#000000', mock: 'gigm-web.png', mockSm: 'gigm-mobile.png' }
        ];
    }
    WorkGigmComponent.prototype.ngOnInit = function () {
    };
    WorkGigmComponent.ɵfac = function WorkGigmComponent_Factory(t) { return new (t || WorkGigmComponent)(); };
    WorkGigmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkGigmComponent, selectors: [["app-work-gigm"]], decls: 67, vars: 1, consts: [[1, "container", "mx-auto"], [1, "work-page-title"], ["class", "work-hero-wrap", 4, "ngFor", "ngForOf"], [1, "project-desc"], [1, "desc-more"], [1, "desc-title"], [1, "text-lg", "leading-10"], [1, "text-xl", "font-semibold"], [1, "list-disc"], [1, "flex", "justify-between", "flex-wrap", "mb-2"], [1, "p-2", "w-full", "md:w-1/3"], ["src", "../../../assets/img/recent-works/gigm/mobile-home-min.png", "alt", "gigm mobile web", "loading", "lazy"], ["src", "../../../assets/img/recent-works/gigm/mobile-choose-bus-min.png", "alt", "Web app", "loading", "lazy"], ["src", "../../../assets/img/recent-works/gigm/mobile-passenger-details-min.png", "alt", "Web app", "loading", "lazy"], [1, "flex", "justify-between", "flex-wrap"], [1, "p-2", "w-full", "md:w-1/2"], ["src", "../../../assets/img/recent-works/gigm/web-home-min.png", "alt", "Web app", "loading", "lazy", 1, "shadow-lg"], ["src", "../../../assets/img/recent-works/gigm/web-choose-bus-min.png", "alt", "Web app", "loading", "lazy", 1, "shadow-lg"], ["src", "../../../assets/img/recent-works/gigm/web-passenger-details-min.png", "alt", "Web app", "loading", "lazy", 1, "shadow-lg"], [1, "know-me-wrap"], [1, "know-me"], ["routerLink", "/about"], [1, "work-hero-wrap"], [1, "hero-bckgrnd", 2, "background-color", "rgb(250, 211, 224)"], ["alt", "", "loading", "lazy", 3, "src"]], template: function WorkGigmComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Case Study: GIGM.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WorkGigmComponent_div_4_Template, 4, 2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "article", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Why this project? Travelling had to be easy");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " We built the GIGM.com with the intention to change the transport system across Africa with an approach to give users the opportunity to book, review and reroute trips from their mobile phones and pc. We needed to make bus fare bookings easy for our guests and ease them the stress of queuing up at the bus terminals for fare tickets. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Goal");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Fare options: additional fare discount for booking online and even more fare discount for signing up on the platform. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Easy-to-understand filter search results: Guests can easily sort search results to find the best travel deals. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Trip details: Guests know what to expect during their journey, with information about departure time and Vehicle type. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Sign in option: Guests can keep tabs on their travel history while signed in. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Easy-to-use payment platforms: Our goal is for Guests to not only book a trip within 2 minutes, but to pay online stress-free. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "My Contribution");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " GIGM.com has a huge user base, so it made sense for us to start our user testing with existing customers. We had interviews with a few of our exisiting users. It was easy to approach them at the bus terminals across the city. I asked about their experience while making booking reservations. I also learned about their likes and dislikes while using the service, their pain-points, the means by which they make their booking reservations, and other alternate services. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " I continued working with the project team by coming up with a whole new set of ideas to solve our user\u2019s needs, wants and desires. Now, most of them were impratical, but we come up with a lot of high quality ideas. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Using the information gathered from interviews, I gathered all the common user needs, and wants, and used all this information to form personas. Journey maps were also created. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Prototyping was the most interesting part because we came up with many inte ideas. I designed walk-through prototypes that allowed people to go through one activity to another. I tested the prototype with users by asking them to perform simple functions. Iterations were made from the feedback gotten from usability tests. I also developed the web user interface. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Know more about me");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "app-footer-social");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.heros);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _components_footer_social_footer_social_component__WEBPACK_IMPORTED_MODULE_3__["FooterSocialComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dvcmstZ2lnbS93b3JrLWdpZ20uY29tcG9uZW50LnNjc3MifQ== */"] });
    return WorkGigmComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkGigmComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-work-gigm',
                templateUrl: './work-gigm.component.html',
                styleUrls: ['./work-gigm.component.scss']
            }]
    }], function () { return []; }, null); })();


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
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jidelambo/Repo/portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map