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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttons{\n  margin-left: 30px;\n  padding-left: 30px;\n}\n\nbutton{\n  margin-left: 5px;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-nav *ngIf=\"isLoggedIn()\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</app-main-nav>\n\n<div *ngIf=\"!isLoggedIn()\">\n  <mat-toolbar color=\"primary\"></mat-toolbar>\n  <app-login ></app-login>\n  <flash-messages></flash-messages>\n</div>\n"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_stk_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/stk.service */ "./src/app/services/stk.service.ts");
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
    function AppComponent(authService, translate, stkService) {
        this.authService = authService;
        this.translate = translate;
        this.stkService = stkService;
        translate.setDefaultLang('de');
        translate.use('de');
    }
    AppComponent.prototype.isLoggedIn = function () {
        return this.authService.loggedIn();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.stkService.updateLocalReports();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _services_stk_service__WEBPACK_IMPORTED_MODULE_3__["StkService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main-nav/main-nav.component */ "./src/app/components/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_search_by_client_search_by_client_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/search-by-client/search-by-client.component */ "./src/app/components/search-by-client/search-by-client.component.ts");
/* harmony import */ var _components_search_by_client_client_table_client_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/search-by-client/client-table/client-table.component */ "./src/app/components/search-by-client/client-table/client-table.component.ts");
/* harmony import */ var _components_stk_stk_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/stk/stk.component */ "./src/app/components/stk/stk.component.ts");
/* harmony import */ var _components_overview_overview_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/overview/overview.component */ "./src/app/components/overview/overview.component.ts");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _services_search_page_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/search-page.service */ "./src/app/services/search-page.service.ts");
/* harmony import */ var _components_search_by_client_device_table_device_table_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/search-by-client/device-table/device-table.component */ "./src/app/components/search-by-client/device-table/device-table.component.ts");
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/device.service */ "./src/app/services/device.service.ts");
/* harmony import */ var _components_stk_tools_tools_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/stk/tools/tools.component */ "./src/app/components/stk/tools/tools.component.ts");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _components_stk_spare_parts_spare_parts_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/stk/spare-parts/spare-parts.component */ "./src/app/components/stk/spare-parts/spare-parts.component.ts");
/* harmony import */ var _components_stk_work_work_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/stk/work/work.component */ "./src/app/components/stk/work/work.component.ts");
/* harmony import */ var _components_stk_infos_infos_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/stk/infos/infos.component */ "./src/app/components/stk/infos/infos.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _components_unfinished_reports_unfinished_reports_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/unfinished-reports/unfinished-reports.component */ "./src/app/components/unfinished-reports/unfinished-reports.component.ts");
/* harmony import */ var _services_stk_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/stk.service */ "./src/app/services/stk.service.ts");
/* harmony import */ var _components_stk_work_work_edit_dialog_work_edit_dialog_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/stk/work/work-edit-dialog/work-edit-dialog.component */ "./src/app/components/stk/work/work-edit-dialog/work-edit-dialog.component.ts");
/* harmony import */ var _components_stk_spare_parts_spareparts_edit_dialog_spareparts_edit_dialog_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/stk/spare-parts/spareparts-edit-dialog/spareparts-edit-dialog.component */ "./src/app/components/stk/spare-parts/spareparts-edit-dialog/spareparts-edit-dialog.component.ts");
/* harmony import */ var _components_stk_preview_preview_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/stk/preview/preview.component */ "./src/app/components/stk/preview/preview.component.ts");
/* harmony import */ var _components_stk_preview_preview_report_dialog_preview_report_dialog_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/stk/preview/preview-report-dialog/preview-report-dialog.component */ "./src/app/components/stk/preview/preview-report-dialog/preview-report-dialog.component.ts");
/* harmony import */ var _components_stk_conclusion_conclusion_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/stk/conclusion/conclusion.component */ "./src/app/components/stk/conclusion/conclusion.component.ts");
/* harmony import */ var _components_stk_test_procedure_test_procedure_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/stk/test-procedure/test-procedure.component */ "./src/app/components/stk/test-procedure/test-procedure.component.ts");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









































var appRoutes = [
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'searchByClient', component: _components_search_by_client_search_by_client_component__WEBPACK_IMPORTED_MODULE_17__["SearchByClientComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'stk', component: _components_stk_stk_component__WEBPACK_IMPORTED_MODULE_19__["StkComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'overview', component: _components_overview_overview_component__WEBPACK_IMPORTED_MODULE_20__["OverviewComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'unfinishedReports', component: _components_unfinished_reports_unfinished_reports_component__WEBPACK_IMPORTED_MODULE_32__["UnfinishedReportsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: '**', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_5__["MainNavComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _components_search_by_client_search_by_client_component__WEBPACK_IMPORTED_MODULE_17__["SearchByClientComponent"],
                _components_search_by_client_client_table_client_table_component__WEBPACK_IMPORTED_MODULE_18__["ClientTableComponent"],
                _components_stk_stk_component__WEBPACK_IMPORTED_MODULE_19__["StkComponent"],
                _components_overview_overview_component__WEBPACK_IMPORTED_MODULE_20__["OverviewComponent"],
                _components_search_by_client_device_table_device_table_component__WEBPACK_IMPORTED_MODULE_23__["DeviceTableComponent"],
                _components_stk_tools_tools_component__WEBPACK_IMPORTED_MODULE_25__["ToolsComponent"],
                _components_stk_spare_parts_spare_parts_component__WEBPACK_IMPORTED_MODULE_27__["SparePartsComponent"],
                _components_stk_work_work_component__WEBPACK_IMPORTED_MODULE_28__["WorkComponent"],
                _components_stk_infos_infos_component__WEBPACK_IMPORTED_MODULE_29__["InfosComponent"],
                _components_unfinished_reports_unfinished_reports_component__WEBPACK_IMPORTED_MODULE_32__["UnfinishedReportsComponent"],
                _components_stk_work_work_edit_dialog_work_edit_dialog_component__WEBPACK_IMPORTED_MODULE_34__["WorkEditDialogComponent"],
                _components_stk_spare_parts_spareparts_edit_dialog_spareparts_edit_dialog_component__WEBPACK_IMPORTED_MODULE_35__["SparepartsEditDialogComponent"],
                _components_stk_preview_preview_component__WEBPACK_IMPORTED_MODULE_36__["PreviewComponent"],
                _components_stk_preview_preview_report_dialog_preview_report_dialog_component__WEBPACK_IMPORTED_MODULE_37__["PreviewReportDialogComponent"],
                _components_stk_conclusion_conclusion_component__WEBPACK_IMPORTED_MODULE_38__["ConclusionComponent"],
                _components_stk_test_procedure_test_procedure_component__WEBPACK_IMPORTED_MODULE_39__["TestProcedureComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_13__["FlashMessagesModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_40__["CdkTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"]]
                    }
                })
            ],
            entryComponents: [_components_stk_work_work_edit_dialog_work_edit_dialog_component__WEBPACK_IMPORTED_MODULE_34__["WorkEditDialogComponent"], _components_stk_spare_parts_spareparts_edit_dialog_spareparts_edit_dialog_component__WEBPACK_IMPORTED_MODULE_35__["SparepartsEditDialogComponent"], _components_stk_preview_preview_report_dialog_preview_report_dialog_component__WEBPACK_IMPORTED_MODULE_37__["PreviewReportDialogComponent"]],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_12__["ValidateService"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_13__["FlashMessagesModule"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"],
                _services_client_service__WEBPACK_IMPORTED_MODULE_21__["ClientService"],
                _services_search_page_service__WEBPACK_IMPORTED_MODULE_22__["SearchPageService"],
                _services_device_service__WEBPACK_IMPORTED_MODULE_24__["DeviceService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"],
                _services_stk_service__WEBPACK_IMPORTED_MODULE_33__["StkService"],
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_LOCALE"], useValue: 'de-DE' }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_31__["TranslateHttpLoader"](http);
}


/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card{\n  max-width: 600px;\n  max-height: 600px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 100px;\n  text-align: center;\n}\n\nmat-form-field{\n  width: 100%;\n\n}\n\nh1, h2{\n  text-align: center;\n}\n\nmat-card-header {\n  text-align: center;\n}\n\n.icon{\n  font-size: larger;\n}\n\nmat-card-content{\n  max-width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nmat-card-actions{\n  text-align: center;\n}\n\nbutton{\n  width: 100%;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  max-width: 80%;\n}\n\nmat-card-header{\n  margin-top: 100px;\n}\n\n.logo{\n  width: 300px;\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>\n    <img class=\"logo\" src=\"assets/images/hospitoolLogo.png\">\n  </mat-card-title>\n\n  <mat-card-content>\n    <form (ngSubmit)=\"onLoginSubmit()\" #loginForm=\"ngForm\">\n\n      <mat-form-field>\n        <input matInput [(ngModel)]=\"username\" name=\"username\" required autocomplete=\"on\">\n        <span matPrefix class=\"icon\"><mat-icon>person</mat-icon>&nbsp;</span>\n        <mat-label>Username</mat-label>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput [(ngModel)]=\"password\" name=\"password\" type=\"password\" required autocomplete=\"on\">\n        <span matPrefix class=\"icon\"><mat-icon>vpn_key</mat-icon>&nbsp;</span>\n        <mat-label>Passwort</mat-label>\n      </mat-form-field>\n\n      <button mat-flat-button type=\"submit\" [disabled]=\"!loginForm.form.valid\">Login</button>\n\n    </form>\n  </mat-card-content>\n  <mat-progress-bar mode=\"indeterminate\" *ngIf=\"waiting\"></mat-progress-bar>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/device.service */ "./src/app/services/device.service.ts");
/* harmony import */ var _services_tool_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/tool.service */ "./src/app/services/tool.service.ts");
/* harmony import */ var _services_stk_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/stk.service */ "./src/app/services/stk.service.ts");
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
    function LoginComponent(authService, router, flashMessage, clientService, deviceService, stkService, toolService) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.clientService = clientService;
        this.deviceService = deviceService;
        this.stkService = stkService;
        this.toolService = toolService;
        this.waiting = false;
    }
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.waiting = true;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.stkService.updateLocalReports();
                _this.toolService.getTools();
                _this.clientService.getClients();
                _this.deviceService.getDevices(0);
                _this.waiting = false;
                _this.router.navigate(['/profile']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/login']);
                _this.waiting = false;
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _services_client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"],
            _services_device_service__WEBPACK_IMPORTED_MODULE_5__["DeviceService"],
            _services_stk_service__WEBPACK_IMPORTED_MODULE_7__["StkService"],
            _services_tool_service__WEBPACK_IMPORTED_MODULE_6__["ToolService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/main-nav/main-nav.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/main-nav/main-nav.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.spacer{\n  flex: 1 1 auto;\n}\n\n.hidden{\n  display: none;\n}\n\ncontentDiv{\n  height: 100%;\n  z-index: -1;\n}\n"

/***/ }),

/***/ "./src/app/components/main-nav/main-nav.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/main-nav/main-nav.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav\n    #drawer\n    class=\"sidenav\"\n    fixedInViewport=\"true\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"stkService.openDrawer\">\n    <!--[opened]=\"!(isHandset$ | async)\">-->\n    <mat-toolbar *ngIf=\"(isHandset$ | async)\">\n      {{\"mainNav.menu\" | translate}}\n    </mat-toolbar>\n    <mat-nav-list *ngIf=\"(isHandset$ | async)\">\n      <a mat-list-item routerLink=\"/searchByClient\"> {{\"mainNav.search\" | translate}}</a>\n      <a mat-list-item routerLink=\"/unfinishedReports\"> {{\"mainNav.unfinishedReports\" | translate}}</a>\n      <a mat-list-item routerLink=\"/stk\"> {{\"mainNav.stk\" | translate}}</a>\n      <a mat-list-item routerLink=\"/overview\"> {{\"mainNav.overview\" | translate}}</a>\n    </mat-nav-list>\n    <mat-toolbar>\n      {{\"mainNav.reports\" | translate}}\n    </mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item *ngFor=\"let report of stkService.reports\"\n         (click)=\"stkService.selectReport(report)\"\n         routerLink=\"/stk\">\n        {{report.device.id}}\n      </a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"stkService.openDrawer = !stkService.openDrawer\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>Hospitool</span>\n      <div [ngClass]=\"{hidden: (isHandset$ | async)}\" *ngIf=\"isLoggedIn()\">\n        <button mat-flat-button [matMenuTriggerFor]=\"searchMenu\">\n          {{\"mainNav.search\" | translate}}\n        </button>\n        <mat-menu #searchMenu=\"matMenu\">\n          <button mat-menu-item routerLink=\"/searchByClient\">{{\"mainNav.byClient\" | translate}}</button>\n          <button mat-menu-item routerLink=\"/unfinishedReports\">{{\"mainNav.unfinishedReports\" | translate}}</button>\n        </mat-menu>\n        <button mat-flat-button routerLink=\"/stk\" (click)=\"stkService.openDrawer = true\">{{\"mainNav.stk\" | translate}}</button>\n        <button mat-flat-button routerLink=\"/overview\">{{\"mainNav.overview\" | translate}}</button>\n      </div>\n\n      <span class=\"spacer\"></span>\n\n      <div *ngIf=\"isLoggedIn()\">\n        <!--\n      <div [ngClass]=\"{hidden: (isHandset$ | async)}\" *ngIf=\"isLoggedIn()\">\n      -->\n        <button mat-flat-button [matMenuTriggerFor]=\"settingsMenu\">\n          <mat-icon>\n            settings\n          </mat-icon>\n        </button>\n        <mat-menu #settingsMenu=\"matMenu\">\n          <button mat-menu-item routerLink=\"/profile\">{{\"mainNav.profile\" | translate}}</button>\n          <button mat-menu-item (click)=\"logout()\">{{\"mainNav.logout\" | translate}}</button>\n        </mat-menu>\n\n        <button mat-flat-button [matMenuTriggerFor]=\"languageMenu\">\n          <mat-icon>\n            language\n          </mat-icon>\n          ({{selectedLanguage}})\n        </button>\n        <mat-menu #languageMenu=\"matMenu\">\n          <button mat-menu-item (click)=\"useLanguage('de')\">de</button>\n          <button mat-menu-item (click)=\"useLanguage('en')\">en</button>\n        </mat-menu>\n      </div>\n\n    </mat-toolbar>\n    <div calss=\"contentDiv\">\n\n      <ng-content></ng-content>\n\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n"

/***/ }),

/***/ "./src/app/components/main-nav/main-nav.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/main-nav/main-nav.component.ts ***!
  \***********************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_stk_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/stk.service */ "./src/app/services/stk.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MainNavComponent = /** @class */ (function () {
    function MainNavComponent(breakpointObserver, authService, router, translate, stkService) {
        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.router = router;
        this.translate = translate;
        this.language = [
            { value: 'de', viewValue: 'Deutsch' },
            { value: 'en', viewValue: 'English' }
        ];
        this.openDrawer = false;
        this.selectedLanguage = this.language[0].value;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
        this.stkService = stkService;
    }
    MainNavComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    MainNavComponent.prototype.useLanguage = function (language) {
        this.translate.use(language);
        this.selectedLanguage = language;
    };
    MainNavComponent.prototype.isLoggedIn = function () {
        return this.authService.loggedIn();
    };
    MainNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-nav',
            template: __webpack_require__(/*! ./main-nav.component.html */ "./src/app/components/main-nav/main-nav.component.html"),
            styles: [__webpack_require__(/*! ./main-nav.component.css */ "./src/app/components/main-nav/main-nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _services_stk_service__WEBPACK_IMPORTED_MODULE_6__["StkService"]])
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "./src/app/components/overview/overview.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/overview/overview.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  max-width: 1300px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 30px;\n  margin-bottom: 50px;\n  z-index:0;\n}\n\nmat-checkbox{\n  margin-right: 20px;\n}\n\nmat-expansion-panel{\n  margin-top: 30px;\n}\n"

/***/ }),

/***/ "./src/app/components/overview/overview.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/overview/overview.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>{{\"overview.overview\"|translate}}</mat-card-title>\n  <mat-tab-group>\n\n    <mat-tab label=\"{{'overview.client'|translate}}\">\n      <app-client-table></app-client-table>\n    </mat-tab>\n\n    <mat-tab label=\"{{'overview.list'|translate}}\">\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            {{'overview.filter'|translate}}\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <fieldset>\n          <legend>{{'overview.viewColumn'|translate}}</legend>\n          <table>\n            <tr>\n              <td>\n                <mat-checkbox class=\"example-margin\"\n                              [(ngModel)]=\"serial\" name=\"serial\"\n                              (click)=\"setRow('serial')\">{{'overview.serial'|translate}}\n                </mat-checkbox>\n              </td>\n              <td>\n                <mat-checkbox class=\"example-margin\"\n                              [(ngModel)]=\"state\" name=\"state\"\n                              (click)=\"setRow('state')\">{{'overview.state'|translate}}\n                </mat-checkbox>\n              </td>\n              <td>\n                <mat-checkbox class=\"example-margin\"\n                              [(ngModel)]=\"description\" name=\"description\"\n                              (click)=\"setRow('description')\">{{'overview.description'|translate}}\n                </mat-checkbox>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <mat-checkbox class=\"example-margin\"\n                              [(ngModel)]=\"brand\" name=\"brand\"\n                              (click)=\"setRow('brand')\">{{'overview.brand'|translate}}\n                </mat-checkbox>\n              </td>\n              <td>\n                <mat-checkbox class=\"example-margin\"\n                              [(ngModel)]=\"department\" name=\"department\"\n                              (click)=\"setRow('department')\">{{'overview.department'|translate}}\n                </mat-checkbox>\n              </td>\n              <td>\n                <mat-checkbox class=\"example-margin\"\n                              [(ngModel)]=\"location\" name=\"location\"\n                              (click)=\"setRow('location')\">{{'overview.location'|translate}}\n                </mat-checkbox>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <mat-checkbox class=\"example-margin\"\n                              [(ngModel)]=\"sla\" name=\"sla\"\n                              (click)=\"setRow('sla')\">{{'overview.sla'|translate}}\n                </mat-checkbox>\n              </td>\n              <td>\n                <mat-checkbox class=\"example-margin\"\n                              [(ngModel)]=\"nextChack\" name=\"nextCheck\"\n                              (click)=\"setRow('nextCheck')\">{{'overview.nextCheck'|translate}}\n                </mat-checkbox>\n              </td>\n              <td>\n                <mat-checkbox class=\"example-margin\"\n                              [(ngModel)]=\"lastChack\" name=\"lastCheck\"\n                              (click)=\"setRow('lastCheck')\">{{'overview.lastCheck'|translate}}\n                </mat-checkbox>\n              </td>\n            </tr>\n          </table>\n        </fieldset>\n        <br>\n        <fieldset>\n          <legend>{{'overview.nextCheckUntil'|translate}}</legend>\n          <mat-form-field>\n            <input matInput\n                   [matDatepicker]=\"dp3\"\n                   disabled\n                   [(ngModel)]=\"nextCheckDate\"\n                   name=\"nextCheckDate\">\n            <mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\n            <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\n            <mat-label> {{ 'stk.date' | translate}}</mat-label>\n          </mat-form-field>\n        </fieldset>\n        <br>\n        <fieldset>\n          <legend>{{'overview.textFilter'|translate}}</legend>\n          <mat-form-field>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n          </mat-form-field>\n        </fieldset>\n      </mat-expansion-panel>\n\n\n      <mat-table #myTable [dataSource]=\"dataSource\" matSort aria-label=\"Devices\">\n\n        <!-- ID Column -->\n        <ng-container matColumnDef=\"id\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>{{'overview.id'|translate}}</mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\n        </ng-container>\n\n        <!-- Model Column -->\n        <ng-container matColumnDef=\"model\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>{{'overview.model'|translate}}</mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.model}} </mat-cell>\n        </ng-container>\n\n        <!-- Next-check Column -->\n        <ng-container matColumnDef=\"nextCheck\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>{{'overview.nextCheck'|translate}}</mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.nextCheck}} </mat-cell>\n        </ng-container>\n\n        <!-- Last-check Column -->\n        <ng-container matColumnDef=\"lastCheck\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>{{'overview.lastCheck'|translate}}</mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.lastCheck}} </mat-cell>\n        </ng-container>\n\n        <!-- Serial Column -->\n        <ng-container matColumnDef=\"serial\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>{{'overview.serial'|translate}}</mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.serial}} </mat-cell>\n        </ng-container>\n\n        <!-- Description Column -->\n        <ng-container matColumnDef=\"description\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>{{'overview.description'|translate}}</mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.description}} </mat-cell>\n        </ng-container>\n\n        <!-- Department Column -->\n        <ng-container matColumnDef=\"department\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>{{'overview.department'|translate}}</mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.department}} </mat-cell>\n        </ng-container>\n\n        <!-- Location Column -->\n        <ng-container matColumnDef=\"location\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>{{'overview.location'|translate}}</mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.location}} </mat-cell>\n        </ng-container>\n\n        <!-- Sla Column -->\n        <ng-container matColumnDef=\"sla\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>{{'overview.sla'|translate}}</mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.sla}} </mat-cell>\n        </ng-container>\n\n        <!-- State Column -->\n        <ng-container matColumnDef=\"state\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>{{'overview.state'|translate}}</mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.state}} </mat-cell>\n        </ng-container>\n\n        <!-- Brand Column -->\n        <ng-container matColumnDef=\"brand\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>{{'overview.brand'|translate}}</mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.brand}} </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n      <mat-paginator #paginator\n                     [length]=\"dataSource.data.length\"\n                     [pageIndex]=\"0\"\n                     [pageSize]=\"20\"\n                     [pageSizeOptions]=\"[5, 10, 20, 30]\">\n      </mat-paginator>\n    </mat-tab>\n  </mat-tab-group>\n  <mat-progress-bar mode=\"indeterminate\" *ngIf=\"waiting\"></mat-progress-bar>\n  <button mat-flat-button (click)=\"getDevices()\">checkDevices</button>\n</mat-card>\n\n\n"

/***/ }),

/***/ "./src/app/components/overview/overview.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/overview/overview.component.ts ***!
  \***********************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_overview_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/overview.service */ "./src/app/services/overview.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(overviewService) {
        this.overviewService = overviewService;
        this.model = true;
        this.description = true;
        this.brand = true;
        this.department = true;
        this.location = true;
        this.sla = true;
        this.nextChack = true;
        this.lastChack = true;
        this.serial = true;
        this.state = true;
        this.waiting = false;
        this.data = new Array();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.displayedColumns = ['id', 'model', 'description',
            'brand', 'serial', 'department', 'location', 'sla', 'nextCheck', 'lastCheck', 'state'];
    }
    OverviewComponent.prototype.setRow = function (name) {
        for (var i = 0; i < this.displayedColumns.length; i++) {
            if (this.displayedColumns[i] == name) {
                this.displayedColumns.splice(i, 1);
                return;
            }
        }
        this.displayedColumns.push(name);
    };
    OverviewComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    OverviewComponent.prototype.getDevices = function () {
        var _this = this;
        this.waiting = true;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.overviewService.getDevices('129').subscribe(function (data) {
            if (data) {
                //this.devices = data;
                //this.dataSource = new MatTableDataSource(this.devices);
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var device = data_1[_i];
                    var item = {
                        id: device.id,
                        model: device.model,
                        description: device.description,
                        brand: device.brand,
                        serial: device.serial,
                        department: device.department.toString(),
                        location: device.location,
                        sla: device.location,
                        nextCheck: device.nextCheck,
                        lastCheck: device.lastCheck,
                        state: device.state
                    };
                    _this.dataSource.data.push(item);
                }
                _this.table.renderRows();
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.waiting = false;
            }
            else {
                console.log("Couldn't load devices from server");
                _this.waiting = false;
            }
        });
    };
    OverviewComponent.prototype.getClients = function () {
        var _this = this;
        this.overviewService.getClients().subscribe(function (data) {
            if (data) {
                _this.overviewService.clients = data.clients;
                //this.dataSource = new MatTableDataSource(this.clients);
            }
            else {
                console.log("Couldn't load clients from server");
            }
        });
    };
    OverviewComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], OverviewComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], OverviewComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myTable'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTable"])
    ], OverviewComponent.prototype, "table", void 0);
    OverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-overview',
            template: __webpack_require__(/*! ./overview.component.html */ "./src/app/components/overview/overview.component.html"),
            styles: [__webpack_require__(/*! ./overview.component.css */ "./src/app/components/overview/overview.component.css")]
        }),
        __metadata("design:paramtypes", [_services_overview_service__WEBPACK_IMPORTED_MODULE_2__["OverviewService"]])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\n  text-align: left;\n}\n\nmat-card {\n  max-width: 1300px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 30px;\n}\n\nmat-card-subtitle{\n  font-size: large;\n}\n\nmat-form-field{\n  margin-right: 10px;\n}\n\nbutton{\n  margin-right: 10px;\n}\n\nfieldset{\n  margin-top: 20px;\n}\n\ntable{\n  min-width: 400px;\n}\n\na{\n  padding-top: 20px;\n}\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>\n    {{('profile.tools'| translate)}}\n  </mat-card-title>\n  <mat-card-subtitle>\n    {{('profile.favorites'| translate)}}\n  </mat-card-subtitle>\n  <mat-card-content>\n\n    <form (ngSubmit)=\"onSubmitAddTool()\" #addToolForm=\"ngForm\">\n      <mat-form-field>\n        <input matInput\n               [(ngModel)]=\"id\"\n               name=\"id\" required\n               minlength=\"5\"\n               maxlength=\"8\">\n        <mat-label>{{('profile.id'| translate)}}</mat-label>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput\n               [(ngModel)]=\"description\"\n               name=\"description\" required>\n        <mat-label>{{('profile.description'| translate)}}</mat-label>\n      </mat-form-field>\n      <button mat-flat-button type=\"submit\"\n              [disabled]=\"!addToolForm.form.valid || alreadyAdded()\">\n        {{('profile.add'| translate)}}\n      </button>\n    </form>\n\n    <mat-progress-bar mode=\"indeterminate\" *ngIf=\"waiting\"></mat-progress-bar>\n\n    <fieldset>\n      <legend>{{('profile.tools'| translate)}}</legend>\n      <table>\n        <tr>\n          <th>{{('profile.id'| translate)}}</th>\n          <th>{{('profile.description'| translate)}}</th>\n        </tr>\n        <tr *ngFor=\"let tool of toolService.tools\">\n          <td>{{tool.id}}</td>\n          <td>{{tool.description}}</td>\n          <td>\n            <button mat-icon-button color=\"primary\" (click)=\"deleteTool(tool)\" color=\"warn\">\n              <mat-icon aria-label=\"delete\">delete</mat-icon>\n            </button>\n          </td>\n        </tr>\n      </table>\n    </fieldset>\n\n  </mat-card-content>\n</mat-card>\n\n<mat-card>\n  <mat-card-title>\n    {{('profile.particulars'| translate)}}\n  </mat-card-title>\n  <mat-card-subtitle>\n    {{('profile.overview'| translate)}}\n  </mat-card-subtitle>\n  <mat-card-content>\n    <table>\n      <tr>\n        <th>{{('profile.name'| translate)}}</th>\n        <td>{{getUser().name}}</td>\n      </tr>\n      <tr>\n        <th>{{('profile.mail'| translate)}}</th>\n        <td>{{getUser().email}}</td>\n      </tr>\n      <tr>\n        <th>{{('profile.username'| translate)}}</th>\n        <td>{{getUser().username}}</td>\n      </tr>\n    </table>\n    <p>\n      <a href=\"mailto:ckiser@hospitec.ch?Subject=Fehlerhafte Personalien&body=Fehlerbeschreibung:\">\n        {{('profile.mistake'| translate)}}\n      </a>\n    </p>\n  </mat-card-content>\n  <mat-divider></mat-divider>\n\n  <br>\n  <mat-card-subtitle>\n    {{('profile.changePassword'| translate)}}\n  </mat-card-subtitle>\n  <mat-card-content>\n\n    <form (ngSubmit)=\"onSubmitChangePW()\" #changePasswordForm=\"ngForm\">\n\n      <mat-form-field>\n        <input matInput type=\"password\" autocomplete=\"off\" [(ngModel)]=\"currentPW\" name=\"currentPW\" required>\n        <mat-label>{{('profile.currentPassword'| translate)}}</mat-label>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput type=\"password\" autocomplete=\"off\" [(ngModel)]=\"newPW\" name=\"newPW\" required>\n        <mat-label>{{('profile.newPassword'| translate)}}</mat-label>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput type=\"password\" autocomplete=\"off\" [(ngModel)]=\"confNewPW\" name=\"confNewPW\" required>\n        <mat-label>{{('profile.confirmPassword'| translate)}}</mat-label>\n      </mat-form-field>\n\n      <button mat-flat-button type=\"submit\" [disabled]=\"!changePasswordForm.form.valid\">\n        {{('profile.changePassword'| translate)}}\n      </button>\n\n    </form>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_tool_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tool.service */ "./src/app/services/tool.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router, toolService) {
        this.authService = authService;
        this.router = router;
        this.toolService = toolService;
        this.waiting = false;
    }
    ProfileComponent.prototype.getUser = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        return JSON.parse(localStorage.getItem('user'));
    };
    ProfileComponent.prototype.onSubmitAddTool = function () {
        var _this = this;
        this.waiting = true;
        this.getUser();
        this.newTool = {
            userName: this.user.username,
            id: this.id,
            description: this.description
        };
        this.toolService.addTool(this.newTool).subscribe(function (data) {
            _this.id = '';
            _this.description = '';
            _this.toolService.getTools();
            _this.waiting = false;
        }, function (err) {
            console.log(err);
            _this.waiting = false;
        });
    };
    ProfileComponent.prototype.deleteTool = function (tool) {
        var _this = this;
        this.waiting = true;
        this.toolService.deleteTool(tool).subscribe(function (data) {
            _this.toolService.getTools();
            _this.waiting = false;
        }, function (err) {
            console.log(err);
            _this.waiting = false;
        });
        ;
    };
    ProfileComponent.prototype.onSubmitChangePW = function () {
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.toolService.tools) {
            this.toolService.getTools();
        }
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile;
        }, function (err) {
            console.log(err);
        });
    };
    ProfileComponent.prototype.alreadyAdded = function () {
        var result = false;
        if (this.toolService.tools && (this.toolService.tools.length > 0))
            for (var _i = 0, _a = this.toolService.tools; _i < _a.length; _i++) {
                var tool = _a[_i];
                if (tool.id == this.id)
                    result = true;
            }
        return result;
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_tool_service__WEBPACK_IMPORTED_MODULE_3__["ToolService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card{\n  max-width: 600px;\n  max-height: 600px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 100px;\n  text-align: center;\n}\n\nmat-form-field{\n  width: 100%;\n\n}\n\nh1, h2{\n  text-align: center;\n}\n\nmat-card-header {\n  text-align: center;\n}\n\n.icon{\n  font-size: larger;\n}\n\nmat-card-content{\n  max-width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nbutton{\n  width: 100%;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  max-width: 80%;\n}\n\nmat-card-header{\n  margin-top: 100px;\n}\n\n.logo{\n  width: 300px;\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>\n    <img class=\"logo\" src=\"/assets/images/hospitoolLogo.png\">\n  </mat-card-title>\n\n  <mat-card-content>\n    <form (ngSubmit)=\"onRegisterSubmit()\" #registerForm=\"ngForm\">\n      <mat-form-field>\n        <input matInput [(ngModel)]=\"firstname\" name=\"firstname\" required>\n        <span matPrefix class=\"icon\"><mat-icon>person</mat-icon>&nbsp;</span>\n        <mat-label> **firstname**</mat-label>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput [(ngModel)]=\"lastname\" name=\"lastname\" required>\n        <span matPrefix class=\"icon\"><mat-icon>person</mat-icon>&nbsp;</span>\n        <mat-label> **lastname**</mat-label>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput [(ngModel)]=\"username\" name=\"username\" required>\n        <span matPrefix class=\"icon\"><mat-icon>person</mat-icon>&nbsp;</span>\n        <mat-label> **Username**</mat-label>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput [(ngModel)]=\"email\" name=\"email\" required>\n        <span matPrefix class=\"icon\"><mat-icon>email</mat-icon>&nbsp;</span>\n        <mat-label> **email**</mat-label>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput type=\"password\" [(ngModel)]=\"password\" name=\"password\" required>\n        <span matPrefix class=\"icon\"><mat-icon>vpn_key</mat-icon>&nbsp;</span>\n        <mat-label>**Passwort**</mat-label>\n      </mat-form-field>\n\n      <button mat-flat-button type=\"submit\" [disabled]=\"!registerForm.form.valid\">**Submit**</button>\n    </form>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.firstname + " " + this.lastname,
            username: this.username,
            email: this.email,
            password: this.password,
        };
        // Checks for empty fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Still empty fields', { cssClass: 'alert-danger', timeout: 2000 });
            return false;
        }
        // Validate the email format
        if (!this.validateService.validateEmail(this.email)) {
            this.flashMessage.show('**Invalid email format**', { cssClass: 'alert-danger', timeout: 2000 });
            return false;
        }
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success == true) {
                _this.flashMessage.show('**The user was successfully created**', { cssClass: 'alert-success', timeout: 2000 });
                console.log(data);
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 2000 });
                console.log(data);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/search-by-client/client-table/client-table.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/search-by-client/client-table/client-table.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\n  width: 100%;\n}\n\n.mat-row:hover{\n  background: #f5f5f5;\n}\n\n.filter{\n  margin-top: 20px;\n}\n\n.refreshButton{\n  margin-top: 20px;\n  float: right;\n}\n"

/***/ }),

/***/ "./src/app/components/search-by-client/client-table/client-table.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/search-by-client/client-table/client-table.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar mode=\"indeterminate\" *ngIf=\"waiting\"></mat-progress-bar>\n\n<mat-form-field class=\"filter\">\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<button mat-flat-button color=\"primary\" class=\"refreshButton\" (click)=\"updateClientList()\">\n  <mat-icon aria-label=\"refresh button\">refresh</mat-icon>\n  <span>&nbsp; {{\"search.refresh\"|translate}}</span>\n</button>\n\n<mat-table #myTable [dataSource]=\"dataSource\" matSort matSortActive=\"id\" matSortDirection=\"asc\">\n  <!--[dataSource]=\"clientService.dataSource\"-->\n\n  <!-- Id Column -->\n  <ng-container matColumnDef=\"id\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>{{\"search.nr\"|translate}}</mat-header-cell>\n    <mat-cell  *matCellDef=\"let row\">{{row.id}}</mat-cell>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>{{\"search.name\"|translate}}</mat-header-cell>\n    <mat-cell *matCellDef=\"let row\">{{row.name}}</mat-cell>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"street\">\n    <mat-header-cell *matHeaderCellDef >{{\"search.street\"|translate}}</mat-header-cell>\n    <mat-cell *matCellDef=\"let row\">{{row.street +\" \"+ row.houseNr}}</mat-cell>\n  </ng-container>\n\n  <!-- Zip Column -->\n  <ng-container matColumnDef=\"zip\">\n    <mat-header-cell *matHeaderCellDef>{{\"search.zip\"|translate}}</mat-header-cell>\n    <mat-cell *matCellDef=\"let row\">{{row.zip}}</mat-cell>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"city\">\n    <mat-header-cell *matHeaderCellDef>{{\"search.city\"|translate}}</mat-header-cell>\n    <mat-cell *matCellDef=\"let row\">{{row.city}}</mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selectClient(row)\"></mat-row>\n</mat-table>\n<mat-paginator #paginator\n               [length]=\"dataSource.data.length\"\n               [pageIndex]=\"0\"\n               [pageSize]=\"20\"\n               [pageSizeOptions]=\"[5, 10, 20, 30]\">\n</mat-paginator>\n"

/***/ }),

/***/ "./src/app/components/search-by-client/client-table/client-table.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/search-by-client/client-table/client-table.component.ts ***!
  \************************************************************************************/
/*! exports provided: ClientTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientTableComponent", function() { return ClientTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _services_search_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/search-page.service */ "./src/app/services/search-page.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientTableComponent = /** @class */ (function () {
    function ClientTableComponent(clientService, searchPageService) {
        this.searchPageService = searchPageService;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.waiting = false;
        this.updateEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /* Columns displayed in the table */
        this.displayedColumns = ['id', 'name', 'street', 'zip', 'city'];
        this.clientService = clientService;
    }
    ClientTableComponent.prototype.selectClient = function (client) {
        var _this = this;
        this.searchPageService.resetDevice();
        this.searchPageService.devices = new Array();
        this.searchPageService.selectClient(client).subscribe(function (data) {
            if (data) {
                _this.searchPageService.devices = data;
                _this.updateEvent.emit(null);
            }
            else {
                console.log("Couldn't load clients from server");
            }
        });
    };
    ClientTableComponent.prototype.updateClientList = function () {
        var _this = this;
        this.waiting = true;
        this.clientService.clients = new Array();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.clientService.getClients().subscribe(function (data) {
            if (data) {
                for (var _i = 0, _a = data.clients; _i < _a.length; _i++) {
                    var item = _a[_i];
                    var client = {
                        id: item.id,
                        nr: item.nr,
                        name: item.name,
                        street: item.street,
                        houseNr: item.houseNr,
                        zip: item.zip,
                        city: item.city,
                    };
                    _this.dataSource.data.push(client);
                    _this.clientService.clients.push(client);
                }
                _this.table.renderRows();
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.waiting = false;
            }
            else {
                console.log("Couldn't load clients from server");
                _this.waiting = false;
            }
        });
    };
    ClientTableComponent.prototype.updateClientListFromService = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        for (var _i = 0, _a = this.clientService.clients; _i < _a.length; _i++) {
            var client = _a[_i];
            this.dataSource.data.push(client);
        }
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.waiting = false;
    };
    ClientTableComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ClientTableComponent.prototype.ngOnInit = function () {
        this.waiting = true;
        if (this.clientService.clients.length == 0) {
            this.updateClientList();
        }
        else {
            this.updateClientListFromService();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ClientTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ClientTableComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myTable'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTable"])
    ], ClientTableComponent.prototype, "table", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ClientTableComponent.prototype, "updateEvent", void 0);
    ClientTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-table',
            template: __webpack_require__(/*! ./client-table.component.html */ "./src/app/components/search-by-client/client-table/client-table.component.html"),
            styles: [__webpack_require__(/*! ./client-table.component.css */ "./src/app/components/search-by-client/client-table/client-table.component.css")]
        }),
        __metadata("design:paramtypes", [_services_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"],
            _services_search_page_service__WEBPACK_IMPORTED_MODULE_2__["SearchPageService"]])
    ], ClientTableComponent);
    return ClientTableComponent;
}());



/***/ }),

/***/ "./src/app/components/search-by-client/device-table/device-table.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/search-by-client/device-table/device-table.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\n  width: 100%;\n}\n\n.mat-row:hover{\n  background: #f5f5f5;\n}\n\n.refreshButton{\n  margin-top: 20px;\n  float: right;\n}\n"

/***/ }),

/***/ "./src/app/components/search-by-client/device-table/device-table.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/search-by-client/device-table/device-table.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar mode=\"indeterminate\" *ngIf=\"waiting\"></mat-progress-bar>\n\n<mat-form-field>\n  <input matInput (keyup)=\"deviceService.applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n\n<button mat-flat-button color=\"primary\" class=\"refreshButton\" (click)=\"updateDeviceList()\">\n  <mat-icon aria-label=\"refresh button\">refresh</mat-icon>\n  <span> &nbsp; {{\"search.refresh\"|translate}}</span>\n</button>\n\n<mat-table  #myTable [dataSource]=\"dataSource\" matSort matSortActive=\"id\" matSortDirection=\"asc\">\n\n  <!-- Id Column -->\n  <ng-container matColumnDef=\"id\" >\n    <mat-header-cell *matHeaderCellDef mat-sort-header>{{\"search.id\"|translate}}</mat-header-cell>\n    <mat-cell *matCellDef=\"let device\">{{device.id}}</mat-cell>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"model\">\n    <mat-header-cell *matHeaderCellDef >{{\"search.model\"|translate}}</mat-header-cell>\n    <mat-cell *matCellDef=\"let device\">{{device.model}}</mat-cell>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"serial\">\n    <mat-header-cell mat-header-cell *matHeaderCellDef >{{\"search.serial\"|translate}}</mat-header-cell>\n    <mat-cell *matCellDef=\"let device\">{{device.serial}}</mat-cell>\n  </ng-container>\n\n  <!-- Zip Column -->\n  <ng-container matColumnDef=\"description\">\n    <mat-header-cell *matHeaderCellDef >{{\"search.description\"|translate}}</mat-header-cell>\n    <mat-cell *matCellDef=\"let device\">{{device.description}}</mat-cell>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"nextCheck\">\n    <mat-header-cell *matHeaderCellDef >{{\"search.nextCheck\"|translate}}</mat-header-cell>\n    <mat-cell *matCellDef=\"let device\">{{device.nextCheck}}</mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let device; columns: displayedColumns;\" (click)=\"selectDevice(device)\"></mat-row>\n</mat-table>\n\n<mat-paginator #paginator\n               [length]=\"dataSource.data.length\"\n               [pageIndex]=\"0\"\n               [pageSize]=\"20\"\n               [pageSizeOptions]=\"[5, 10, 20, 30]\">\n</mat-paginator>\n"

/***/ }),

/***/ "./src/app/components/search-by-client/device-table/device-table.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/search-by-client/device-table/device-table.component.ts ***!
  \************************************************************************************/
/*! exports provided: DeviceTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceTableComponent", function() { return DeviceTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/device.service */ "./src/app/services/device.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_search_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/search-page.service */ "./src/app/services/search-page.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeviceTableComponent = /** @class */ (function () {
    function DeviceTableComponent(deviceService, searchPageService) {
        this.searchPageService = searchPageService;
        this.waiting = false;
        this.devices = new Array();
        /* Columns displayed in the table */
        this.displayedColumns = ['id', 'model', 'serial', 'description', 'nextCheck'];
        this.deviceService = deviceService;
    }
    DeviceTableComponent.prototype.selectDevice = function (device) {
        this.searchPageService.selectDevice(device);
    };
    DeviceTableComponent.prototype.getData = function () {
        console.log("updated");
        this.waiting = true;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        for (var _i = 0, _a = this.searchPageService.devices; _i < _a.length; _i++) {
            var device = _a[_i];
            this.dataSource.data.push(device);
        }
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.waiting = false;
    };
    DeviceTableComponent.prototype.updateDeviceList = function () {
        var _this = this;
        this.waiting = true;
        this.deviceService.getDevices(this.searchPageService.selectedClient.id).subscribe(function (data) {
            if (data) {
                _this.searchPageService.devices = data;
                _this.getData();
            }
            else {
                console.log("Couldn't load clients from server");
            }
        });
    };
    DeviceTableComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], DeviceTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], DeviceTableComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myTable'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTable"])
    ], DeviceTableComponent.prototype, "table", void 0);
    DeviceTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-device-table',
            template: __webpack_require__(/*! ./device-table.component.html */ "./src/app/components/search-by-client/device-table/device-table.component.html"),
            styles: [__webpack_require__(/*! ./device-table.component.css */ "./src/app/components/search-by-client/device-table/device-table.component.css")]
        }),
        __metadata("design:paramtypes", [_services_device_service__WEBPACK_IMPORTED_MODULE_1__["DeviceService"],
            _services_search_page_service__WEBPACK_IMPORTED_MODULE_3__["SearchPageService"]])
    ], DeviceTableComponent);
    return DeviceTableComponent;
}());



/***/ }),

/***/ "./src/app/components/search-by-client/search-by-client.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/search-by-client/search-by-client.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  max-width: 1300px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 30px;\n  z-index:0;\n}\n\nfieldset{\n  margin-top: 20px;\n}\n\ntable{\n  padding-top: 20px;\n  padding-bottom: 20px;\n  text-align: left;\n  vertical-align: text-top;\n}\n\ntd, th{\n  vertical-align: text-top;\n  text-align: left;\n}\n\ntd{\n  padding-right: 30px;\n}\n\nbutton{\n  margin-top: 20px;\n}\n\n.info{\n  color: green;\n}\n"

/***/ }),

/***/ "./src/app/components/search-by-client/search-by-client.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/search-by-client/search-by-client.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-tab-group [(selectedIndex)]=\"searchPageService.activeTab\">\n    <mat-tab label=\"{{'search.client'|translate}}\">\n      <app-client-table (updateEvent)=\"clientTable.getData()\"></app-client-table>\n    </mat-tab>\n    <mat-tab label=\"{{'search.devices'|translate}}\" [disabled]=\"!searchPageService.selectedClient\">\n      <h2 *ngIf=\"searchPageService.selectedClient\">\n        {{getSelectedClient().name}}\n      </h2>\n      <app-device-table #clientTable></app-device-table>\n    </mat-tab>\n    <mat-tab label=\"{{'search.infos'|translate}}\" [disabled]=\"!searchPageService.selectedDevice\">\n      <fieldset>\n        <legend>{{'search.device'|translate}}</legend>\n        <table *ngIf=\"searchPageService.selectedDevice\">\n          <tr>\n            <th>{{'search.id'|translate}}</th>\n            <td>{{searchPageService.selectedDevice.id}}</td>\n            <th>{{'search.serial'|translate}}</th>\n            <td>{{searchPageService.selectedDevice.serial}}</td>\n          </tr>\n          <tr>\n            <th>{{'search.model'|translate}}</th>\n            <td>{{searchPageService.selectedDevice.model}}</td>\n            <th>{{'search.year'|translate}}</th>\n            <td>{{searchPageService.selectedDevice.year}}</td>\n          <tr>\n            <th>{{'search.description'|translate}}</th>\n            <td>{{searchPageService.selectedDevice.description}}</td>\n            <th>{{'search.brand'|translate}}</th>\n            <td>{{searchPageService.selectedDevice.brand}}</td>\n          </tr>\n          <tr>\n            <th>{{'search.department'|translate}}</th>\n            <td>{{searchPageService.selectedDevice.department}}</td>\n            <th>{{'search.nextCheck'|translate}}</th>\n            <td>{{searchPageService.selectedDevice.nextCheck}}</td>\n          </tr>\n          <tr>\n            <th>{{'search.location'|translate}}</th>\n            <td>{{searchPageService.selectedDevice.location}}</td>\n            <th>{{'search.lastCheck'|translate}}</th>\n            <td>{{searchPageService.selectedDevice.lastCheck}}</td>\n          </tr>\n          <tr>\n            <th>{{'search.contract'|translate}}</th>\n            <td>{{searchPageService.selectedDevice.contract}}</td>\n            <th>{{'search.contractNr'|translate}}</th>\n            <td>{{searchPageService.selectedDevice.contractNr}}</td>\n          </tr>\n          <tr>\n            <th>{{'search.interval'|translate}}</th>\n            <td>{{searchPageService.selectedDevice.interval}}</td>\n          </tr>\n        </table>\n      </fieldset>\n\n      <fieldset>\n        <legend>{{'search.client'|translate}}</legend>\n        <table *ngIf=\"searchPageService.selectedClient\">\n          <tr>\n            <th>{{'search.name'|translate}}</th>\n            <td>{{searchPageService.selectedClient.name}}</td>\n          </tr>\n          <tr>\n            <th>{{'search.street'|translate}}</th>\n            <td>{{searchPageService.selectedClient.street +' '+ searchPageService.selectedClient.houseNr}}</td>\n          <tr>\n            <th>{{'search.city'|translate}}</th>\n            <td>{{searchPageService.selectedClient.zip + ' ' + searchPageService.selectedClient.city}}</td>\n          </tr>\n        </table>\n      </fieldset>\n\n      <button mat-flat-button color=\"primary\"\n              [disabled]=\"alreadyLoaded()\"\n              (click)=\"createReport()\">\n        {{'search.loadReport'|translate}}\n      </button>\n      <p *ngIf=\"alreadyLoaded()\" class=\"info\">\n        <mat-icon>info</mat-icon>\n        {{'search.alreadyLoaded'|translate}}\n      </p>\n    </mat-tab>\n  </mat-tab-group>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/components/search-by-client/search-by-client.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/search-by-client/search-by-client.component.ts ***!
  \***************************************************************************/
/*! exports provided: SearchByClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchByClientComponent", function() { return SearchByClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_search_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/search-page.service */ "./src/app/services/search-page.service.ts");
/* harmony import */ var _services_stk_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/stk.service */ "./src/app/services/stk.service.ts");
/* harmony import */ var _device_table_device_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./device-table/device-table.component */ "./src/app/components/search-by-client/device-table/device-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchByClientComponent = /** @class */ (function () {
    function SearchByClientComponent(searchPageService, stkService) {
        this.stkService = stkService;
        this.searchPageService = searchPageService;
    }
    SearchByClientComponent.prototype.getSelectedClient = function () {
        return this.searchPageService.selectedClient;
    };
    SearchByClientComponent.prototype.createReport = function () {
        this.stkService.createReport();
    };
    SearchByClientComponent.prototype.alreadyLoaded = function () {
        var result = false;
        for (var _i = 0, _a = this.stkService.reports; _i < _a.length; _i++) {
            var i = _a[_i];
            if (this.searchPageService.selectedDevice) {
                if (i.device.id == this.searchPageService.selectedDevice.id) {
                    if (i.client.id == this.searchPageService.selectedClient.id)
                        result = true;
                }
            }
        }
        return result;
    };
    /*
    showDevices(){
      return this.searchPageService.showDevices;
    }
    */
    SearchByClientComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myTable'),
        __metadata("design:type", _device_table_device_table_component__WEBPACK_IMPORTED_MODULE_3__["DeviceTableComponent"])
    ], SearchByClientComponent.prototype, "deviceTable", void 0);
    SearchByClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-by-client',
            template: __webpack_require__(/*! ./search-by-client.component.html */ "./src/app/components/search-by-client/search-by-client.component.html"),
            styles: [__webpack_require__(/*! ./search-by-client.component.css */ "./src/app/components/search-by-client/search-by-client.component.css")]
        }),
        __metadata("design:paramtypes", [_services_search_page_service__WEBPACK_IMPORTED_MODULE_1__["SearchPageService"],
            _services_stk_service__WEBPACK_IMPORTED_MODULE_2__["StkService"]])
    ], SearchByClientComponent);
    return SearchByClientComponent;
}());



/***/ }),

/***/ "./src/app/components/stk/conclusion/conclusion.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/stk/conclusion/conclusion.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/stk/conclusion/conclusion.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/stk/conclusion/conclusion.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-form-field>\n    <mat-label>{{\"stk.serviceKit\"|translate}}</mat-label>\n    <mat-select [(value)]=\"stkService.selectedReport.serviceKit\">\n      <mat-option *ngFor=\"let serviceKit of serviceKits\" [value]=\"serviceKit.value\">\n        {{serviceKit.value}}\n        <small>{{serviceKit.viewValue}}</small>\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n\n<mat-form-field>\n  <mat-label>{{\"stk.state\"|translate}}</mat-label>\n  <mat-select [(value)]=\"stkService.selectedReport.state\">\n    <mat-option value=\"passed\" *ngIf=\"stkService.selectedReport.testProcedure.validationCheck()\">\n      {{\"stk.passed\"|translate}}\n    </mat-option>\n    <mat-option value=\"notFound\" *ngIf=\"!stkService.selectedReport.testProcedure.validationCheck()\">\n      {{\"stk.notFound\"|translate}}\n    </mat-option>\n    <mat-option value=\"notAvailable\" *ngIf=\"!stkService.selectedReport.testProcedure.validationCheck()\">\n      {{\"stk.notAvailable\"|translate}}\n    </mat-option>\n    <mat-option value=\"unfinished\">{{\"stk.unfinished\"|translate}}</mat-option>\n    <mat-option value=\"repairNeeds\">{{\"stk.repairNeeds\"|translate}}</mat-option>\n    <mat-option value=\"outOfService\" *ngIf=\"!stkService.selectedReport.testProcedure.validationCheck()\">\n      {{\"stk.outOfService\"|translate}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<div>\n  <mat-form-field>\n    <mat-label>{{\"stk.comments\"|translate}}</mat-label>\n    <textarea matInput [(ngModel)]=\"stkService.selectedReport.comment\"></textarea>\n  </mat-form-field>\n</div>\n"

/***/ }),

/***/ "./src/app/components/stk/conclusion/conclusion.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/stk/conclusion/conclusion.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConclusionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConclusionComponent", function() { return ConclusionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_stk_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/stk.service */ "./src/app/services/stk.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConclusionComponent = /** @class */ (function () {
    function ConclusionComponent(stkService) {
        this.year = new Date().getFullYear();
        this.serviceKits = [
            { viewValue: '', value: '-' },
            { viewValue: "(" + (this.year + 1) + ")", value: '1' },
            { viewValue: "(" + (this.year + 2) + ")", value: '2' },
            { viewValue: "(" + (this.year + 3) + ")", value: '3' },
            { viewValue: "(" + (this.year + 4) + ")", value: '4' },
            { viewValue: "(" + (this.year + 5) + ")", value: '5' },
            { viewValue: "(" + (this.year + 6) + ")", value: '6' },
            { viewValue: "(" + (this.year + 7) + ")", value: '7' },
            { viewValue: "(" + (this.year + 8) + ")", value: '8' },
            { viewValue: "(" + (this.year + 10) + ")", value: '10' },
            { viewValue: "(" + (this.year + 12) + ")", value: '12' }
        ];
        this.stkService = stkService;
    }
    ConclusionComponent.prototype.ngOnInit = function () {
    };
    ConclusionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-conclusion',
            template: __webpack_require__(/*! ./conclusion.component.html */ "./src/app/components/stk/conclusion/conclusion.component.html"),
            styles: [__webpack_require__(/*! ./conclusion.component.css */ "./src/app/components/stk/conclusion/conclusion.component.css")]
        }),
        __metadata("design:paramtypes", [_services_stk_service__WEBPACK_IMPORTED_MODULE_1__["StkService"]])
    ], ConclusionComponent);
    return ConclusionComponent;
}());



/***/ }),

/***/ "./src/app/components/stk/infos/infos.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/stk/infos/infos.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\n  text-align: left;\n}\n\ntd{\n  padding-right: 20px;\n}\n\nmat-form-field{\n  width: 90%;\n}\n"

/***/ }),

/***/ "./src/app/components/stk/infos/infos.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/stk/infos/infos.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group *ngIf=\"stkService.selectedReport\">\n  <mat-tab label=\"{{'stk.device' | translate}}\">\n    <br>\n    <table>\n      <tr>\n        <th>{{\"stk.id\" | translate}}</th>\n        <td>{{stkService.selectedReport.device.id}}</td>\n        <th>{{\"stk.serial\" | translate}}</th>\n        <td>{{stkService.selectedReport.device.serial}}</td>\n      </tr>\n      <tr>\n        <th>{{\"stk.model\" | translate}}</th>\n        <td>{{stkService.selectedReport.device.model}}</td>\n        <th>{{\"stk.year\" | translate}}</th>\n        <td>{{stkService.selectedReport.device.year}}</td>\n      <tr>\n        <th>{{\"stk.description\" | translate}}</th>\n        <td>{{stkService.selectedReport.device.description}}</td>\n        <th>{{\"stk.brand\" | translate}}</th>\n        <td>{{stkService.selectedReport.device.brand}}</td>\n      </tr>\n      <tr>\n        <th>{{\"stk.department\" | translate}}</th>\n        <td>{{stkService.selectedReport.device.department}}</td>\n        <th>{{\"stk.nextCheck\" | translate}}</th>\n        <td>{{stkService.selectedReport.device.nextCheck}}</td>\n      </tr>\n      <tr>\n        <th>{{\"stk.location\" | translate}}</th>\n        <td>{{stkService.selectedReport.device.location}}</td>\n        <th>{{\"stk.lastCheck\" | translate}}</th>\n        <td>{{stkService.selectedReport.device.lastCheck}}</td>\n      </tr>\n      <tr>\n        <th>{{\"stk.contract\" | translate}}</th>\n        <td>{{stkService.selectedReport.device.contract}}</td>\n        <th>{{\"stk.contractNr\" | translate}}</th>\n        <td>{{stkService.selectedReport.device.contractNr}}</td>\n      </tr>\n      <tr>\n        <th>{{\"stk.interval\" | translate}}</th>\n        <td>{{stkService.selectedReport.device.interval}}</td>\n      </tr>\n    </table>\n  </mat-tab>\n  <mat-tab label=\"{{'stk.client' | translate}}\">\n    <br>\n    <table>\n      <tr>\n        <th>{{\"stk.name\" | translate}}</th>\n        <td>{{stkService.selectedReport.client.name}}</td>\n      </tr>\n      <tr>\n        <th>{{\"stk.street\" | translate}}</th>\n        <td>{{stkService.selectedReport.client.street +\" \"+ stkService.selectedReport.client.houseNr}}</td>\n      <tr>\n        <th>{{\"stk.city\" | translate}}</th>\n      <td>{{stkService.selectedReport.client.zip}} {{stkService.selectedReport.client.city}}</td>\n      </tr>\n    </table>\n  </mat-tab>\n\n  <mat-tab label=\"{{'stk.corrections' | translate}}\">\n    <br>\n    <mat-grid-list cols=\"2\" rowHeight=\"60\">\n      <mat-grid-tile\n        [colspan]=\"1\"\n        [rowspan]=\"1\">\n        <mat-form-field>\n          <input [(ngModel)]=\"stkService.selectedReport.corrections.id\" matInput>\n          <mat-label>{{\"stk.id\" | translate}}</mat-label>\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile\n        [colspan]=\"1\"\n        [rowspan]=\"1\">\n        <mat-form-field>\n          <input [(ngModel)]=\"stkService.selectedReport.corrections.serial\" matInput>\n          <mat-label>{{\"stk.serial\" | translate}}</mat-label>\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile\n        [colspan]=\"1\"\n        [rowspan]=\"1\">\n        <mat-form-field>\n          <input [(ngModel)]=\"stkService.selectedReport.corrections.model\" matInput>\n          <mat-label>{{\"stk.model\" | translate}}</mat-label>\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile\n        [colspan]=\"1\"\n        [rowspan]=\"1\">\n        <mat-form-field>\n          <input [(ngModel)]=\"stkService.selectedReport.corrections.year\"\n                 type=\"number\"\n                 step=\"1\"\n                 min=\"1950\"\n                 [max]=\"checkMaxYear()\"\n                 matInput>\n          <mat-label>{{\"stk.year\" | translate}}</mat-label>\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile\n        [colspan]=\"1\"\n        [rowspan]=\"1\">\n        <mat-form-field>\n          <input [(ngModel)]=\"stkService.selectedReport.corrections.location\" matInput>\n          <mat-label>{{\"stk.location\" | translate}}</mat-label>\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile\n        [colspan]=\"1\"\n        [rowspan]=\"1\">\n        <mat-form-field>\n          <input [(ngModel)]=\"stkService.selectedReport.corrections.department\" matInput>\n          <mat-label>{{\"stk.department\" | translate}}</mat-label>\n        </mat-form-field>\n      </mat-grid-tile>\n\n    </mat-grid-list>\n  </mat-tab>\n</mat-tab-group>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/stk/infos/infos.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/stk/infos/infos.component.ts ***!
  \*********************************************************/
/*! exports provided: InfosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfosComponent", function() { return InfosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_search_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/search-page.service */ "./src/app/services/search-page.service.ts");
/* harmony import */ var _services_stk_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/stk.service */ "./src/app/services/stk.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InfosComponent = /** @class */ (function () {
    function InfosComponent(searchPageService, stkService) {
        this.searchPageService = searchPageService;
        this.stkService = stkService;
    }
    InfosComponent.prototype.checkMaxYear = function () {
        return new Date().getFullYear();
    };
    InfosComponent.prototype.ngOnInit = function () { };
    InfosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-infos',
            template: __webpack_require__(/*! ./infos.component.html */ "./src/app/components/stk/infos/infos.component.html"),
            styles: [__webpack_require__(/*! ./infos.component.css */ "./src/app/components/stk/infos/infos.component.css")]
        }),
        __metadata("design:paramtypes", [_services_search_page_service__WEBPACK_IMPORTED_MODULE_1__["SearchPageService"],
            _services_stk_service__WEBPACK_IMPORTED_MODULE_2__["StkService"]])
    ], InfosComponent);
    return InfosComponent;
}());



/***/ }),

/***/ "./src/app/components/stk/preview/preview-report-dialog/preview-report-dialog.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/stk/preview/preview-report-dialog/preview-report-dialog.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/stk/preview/preview-report-dialog/preview-report-dialog.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/stk/preview/preview-report-dialog/preview-report-dialog.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\n  <div>\n    <app-preview></app-preview>\n  </div>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <div class=\"button-row\">\n    <button mat-button mat-dialog-close>\n      {{ 'preview.close' | translate}}\n    </button>\n  </div>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/components/stk/preview/preview-report-dialog/preview-report-dialog.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/stk/preview/preview-report-dialog/preview-report-dialog.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: PreviewReportDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewReportDialogComponent", function() { return PreviewReportDialogComponent; });
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

var PreviewReportDialogComponent = /** @class */ (function () {
    function PreviewReportDialogComponent() {
    }
    PreviewReportDialogComponent.prototype.ngOnInit = function () { };
    PreviewReportDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preview-report-dialog',
            template: __webpack_require__(/*! ./preview-report-dialog.component.html */ "./src/app/components/stk/preview/preview-report-dialog/preview-report-dialog.component.html"),
            styles: [__webpack_require__(/*! ./preview-report-dialog.component.css */ "./src/app/components/stk/preview/preview-report-dialog/preview-report-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PreviewReportDialogComponent);
    return PreviewReportDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/stk/preview/preview.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/stk/preview/preview.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headerTable{\n  width: 18.3cm;\n  border-spacing:0;\n  border-collapse:collapse;\n}\n\n.workTable{\n  width: 18.3cm;\n  border-spacing:0;\n  border-collapse:collapse;\n  border: black solid 1px;\n  margin-top: 5px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  text-align: left;\n}\n\n.sparePartTable{\n  width: 18.3cm;\n  border-spacing:0;\n  border-collapse:collapse;\n  border: black solid 1px;\n  margin-top: 5px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  text-align: left;\n}\n\n.footerTable{\n  width: 18.3cm;\n  border-spacing:0;\n  border-collapse:collapse;\n  border: black solid 1px;\n  margin-top: 5px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  text-align: left;\n}\n\n.sparePartCell{\n  border: black dotted 1px;\n}\n\n.headerTableTwo{\n  border-spacing:0;\n  border-collapse:collapse;\n  border: 1px solid black;\n  width: 18.3cm;\n}\n\n.footerCell{\n  border: black solid 1px;\n}\n\n.borderLeft{\n  border-top: 1px solid black;\n  border-left: 1px solid black;\n}\n\n.borderRight{\n  border-top: 1px solid black;\n  border-right: 1px solid black;\n}\n\n.firstCol{\n  width: 6.4cm;\n  vertical-align: text-top;\n  padding-left: 10px;\n  padding-top: 10px;\n}\n\n.secondCol{\n  width: 45%;\n}\n\n.logo{\n  max-width: 5cm;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.reportTitle{\n  text-align: center;\n  border: 1px solid black;\n}\n\n.topBorder{\n  border-top: 1px solid black;\n}\n\n.qrCode{\n  text-align: center;\n}\n\n.textTop{\n  vertical-align: text-top;\n}\n\n.checkTable{\n  text-align: left;\n  border-spacing:0;\n  border-collapse:collapse;\n  width: 18.3cm;\n\n}\n\nhr{\n  margin-bottom: 30px;\n  margin-top: 30px;\n}\n\n.checkTableDiv{\n  margin-top: 10px;\n}\n\n.checkTableCol2{\n  max-width: 6.3cm;\n  min-width: 6.3cm;\n}\n\n.checkTableCol3{\n  min-width: 2.1cm;\n  max-width: 2.1cm;\n}\n\n.checkTableComment{\n  min-width: 2.9cm;\n  max-width: 2.9cm;\n}\n\n.textCenter{\n  text-align: center;\n}\n\n.greyBack{\n  background-color: lightgrey;\n}\n"

/***/ }),

/***/ "./src/app/components/stk/preview/preview.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/stk/preview/preview.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"headerTable\">\n  <tr>\n    <td>\n      <div class=\"logo\">\n        <img class=\"logo\" src=\"/src/assets/images/hospitoolLogo.png\"\n             style='height: 100%; width: 100%; object-fit: contain;'/>\n      </div>\n    </td>\n    <td colspan=\"2\" class=\"reportTitle\">\n      <b>STK</b><br>\n      {{ 'preview.safetyCheck' | translate}}\n    </td>\n    <td colspan=\"2\" class=\"qrCode\">\n      QR-CODE\n    </td>\n  </tr>\n  <tr>\n    <td colspan=\"5\" style=\"height: 20px;\"></td>\n  </tr>\n  <tr>\n    <td rowspan=\"5\" class=\"borderLeft textTop\">\n      <b>\n        {{stkService.selectedReport.client.name}}<br>\n        {{stkService.selectedReport.client.street}}<br>\n        {{stkService.selectedReport.client.zip}} {{stkService.selectedReport.client.city}} <br>\n      </b>\n    </td>\n    <td rowspan=\"5\" class=\"borderLeft textTop\">\n      {{ 'preview.id' | translate}}<br>\n      {{ 'preview.sn' | translate}}<br>\n      {{ 'preview.model' | translate}}\n    </td>\n    <td rowspan=\"5\">\n      <b>\n        {{stkService.selectedReport.device.id}}<br>\n        {{stkService.selectedReport.device.serial}}<br>\n        {{stkService.selectedReport.device.model}}<br>\n        {{stkService.selectedReport.device.description}}<br>\n        {{stkService.selectedReport.device.brand}}<br>\n      </b>\n    </td>\n    <td rowspan=\"5\" class=\"borderLeft textTop\">\n      {{ 'preview.contract' | translate}}<br>\n      {{ 'preview.sla' | translate}}<br>\n      {{ 'preview.interval' | translate}}<br>\n      {{ 'preview.year' | translate}}\n    </td>\n    <td rowspan=\"5\" class=\"borderRight textTop\">\n      <b>\n        {{stkService.selectedReport.contract}}<br>\n        **R+**<br>\n        {{stkService.selectedReport.device.intervall}}<br>\n        {{stkService.selectedReport.year}}\n      </b>\n    </td>\n  </tr>\n  <tr></tr>\n  <tr></tr>\n  <tr></tr>\n  <tr></tr>\n  <tr>\n    <td class=\"borderLeft\">{{ 'preview.account' | translate}} <b>{{stkService.selectedReport.device.department}}</b></td>\n    <td class=\"borderLeft\">{{ 'preview.location' | translate}}</td>\n    <td class=\"topBorder\"><b>{{stkService.selectedReport.device.location}}</b></td>\n    <td colspan=\"2\" class=\"textCenter borderLeft borderRight\">**SD: &#8864;**</td>\n  </tr>\n\n  <!-- tools muss hier noch rein-->\n  <tr>\n    <td colspan=\"5\"\n        style=\"border: 1px black solid;\n        padding-top: 3px;\n        padding-bottom: 3px;\">\n      <span>{{ 'preview.tools' | translate}}</span>\n      <span *ngFor=\"let tool of stkService.selectedReport.tools; let i = index\" style=\"padding-left: 20px;\">\n        <small>{{1+i}}. </small><b>{{tool}}</b>\n      </span>\n    </td>\n  </tr>\n\n\n  <!-- ServiceKit Row -->\n  <tr>\n    <td colspan=\"5\"\n        style=\"border: 1px black solid;\n        padding-top: 3px;\n        padding-bottom: 3px;\">\n      <span>{{ 'preview.serviceKit' | translate}}</span>\n      <span style=\"padding-left: 20px;\" [innerHTML]=\"checkServiceKit(1) + 1\"></span>\n      <span style=\"padding-left: 20px;\" [innerHTML]=\"checkServiceKit(2) + 2\"></span>\n      <span style=\"padding-left: 20px;\" [innerHTML]=\"checkServiceKit(3) + 3\"></span>\n      <span style=\"padding-left: 20px;\" [innerHTML]=\"checkServiceKit(4) + 4\"></span>\n      <span style=\"padding-left: 20px;\" [innerHTML]=\"checkServiceKit(5) + 5\"></span>\n      <span style=\"padding-left: 20px;\" [innerHTML]=\"checkServiceKit(6) + 6\"></span>\n      <span style=\"padding-left: 20px;\" [innerHTML]=\"checkServiceKit(7) + 7\"></span>\n      <span style=\"padding-left: 20px;\" [innerHTML]=\"checkServiceKit(8) + 8\"></span>\n      <span style=\"padding-left: 20px;\" [innerHTML]=\"checkServiceKit(10) + 10\"></span>\n      <span style=\"padding-left: 20px;\" [innerHTML]=\"checkServiceKit(12) + 12\"></span>\n    </td>\n  </tr>\n</table>\n\n\n<table class=\"workTable\">\n\n  <tr>\n    <td style=\"border: black 1px dotted;\">\n      {{ 'preview.service' | translate}}\n    </td>\n    <td style=\"border: black 1px dotted;\" class=\"textCenter\">\n      {{ 'preview.date' | translate}}\n    </td>\n    <td style=\"border: black 1px dotted;\" class=\"textCenter\">\n      {{ 'preview.technician' | translate}}\n    </td>\n    <td style=\"border: black 1px dotted;\" class=\"textCenter\">\n      {{ 'preview.workTime' | translate}}\n    </td>\n    <td style=\"border: black 1px dotted;\" class=\"textCenter\">\n      {{ 'preview.travelTime' | translate}}\n    </td>\n    <td style=\"border: black 1px dotted;\" class=\"textCenter\">\n      {{ 'preview.total' | translate}}\n    </td>\n    <td style=\"border: black 1px dotted;\" class=\"textCenter\">\n      {{ 'preview.chargeable' | translate}}\n    </td>\n  </tr>\n  <tr *ngFor=\"let work of stkService.selectedReport.work\">\n    <td style=\"border: black 1px dotted;\">{{work.service}}</td>\n    <td style=\"border: black 1px dotted;\" class=\"textCenter\">{{work.date | date: 'dd.MM.yyyy'}}</td>\n    <td style=\"border: black 1px dotted;\" class=\"textCenter\">{{work.technician}}</td>\n    <td style=\"border: black 1px dotted;\" class=\"textCenter\">{{work.workload}}</td>\n    <td style=\"border: black 1px dotted;\" class=\"textCenter\">{{work.travelTime}}</td>\n    <td style=\"border: black 1px dotted;\" class=\"textCenter\">{{work.workload + work.travelTime}}</td>\n    <td style=\"border: black 1px dotted;\" class=\"textCenter\" [innerHTML]=\"checkChargeable(work.chargeable)\"></td>\n  </tr>\n</table>\n\n<table class=\"sparePartTable\" *ngIf=\"stkService.selectedReport.spareParts\">\n  <tr>\n    <td colspan=\"8\"> {{ 'preview.spareParts' | translate}}</td>\n  </tr>\n  <tr>\n    <td class=\"sparePartCell\">\n      {{ 'preview.articleNumber' | translate}}\n    </td>\n    <td class=\"sparePartCell\">\n      {{ 'preview.description' | translate}}\n    </td>\n    <td class=\"sparePartCell\">\n      {{ 'preview.snLot' | translate}}\n    </td>\n    <td class=\"sparePartCell\">\n      {{ 'preview.supplier' | translate}}\n    </td>\n    <td class=\"sparePartCell textCenter\">\n      {{ 'preview.amount' | translate}}\n    </td>\n    <td class=\"sparePartCell textCenter\">\n      {{ 'preview.price' | translate}}\n    </td>\n    <td class=\"sparePartCell textCenter\">\n      {{ 'preview.total' | translate}}\n    </td>\n    <td class=\"sparePartCell textCenter\">\n      {{ 'preview.chargeable' | translate}}\n    </td>\n  </tr>\n  <tr *ngFor=\"let sparePart of stkService.selectedReport.spareParts\">\n    <td class=\"sparePartCell\">{{sparePart.articleNr}}</td>\n    <td class=\"sparePartCell\">{{sparePart.description}}</td>\n    <td class=\"sparePartCell\">{{sparePart.serial}}</td>\n    <td class=\"sparePartCell\">{{sparePart.supplier}}</td>\n    <td class=\"sparePartCell textCenter\">{{sparePart.amount}}</td>\n    <td class=\"sparePartCell textCenter\">{{sparePart.price}}</td>\n    <td class=\"sparePartCell textCenter\">{{sparePart.amount * sparePart.price}}</td>\n    <td class=\"sparePartCell textCenter\" [innerHTML]=\"checkChargeable(sparePart.chargeable)\"></td>\n  </tr>\n</table>\n\n\n<div *ngIf=\"stkService.selectedReport.comment\"\n     style=\"border: 1px black solid;\n     margin-top: 3px;\n     width: 18cm;\n     padding-top: 3px;\n     padding-bottom: 3px;\">\n  <span>\n    <b> {{ 'preview.comments' | translate}}</b>\n  </span>\n  <br>\n  <span>{{stkService.selectedReport.comment}}</span>\n</div>\n\n<table class=\"footerTable\">\n  <tr>\n    <td>{{'preview.notFound' | translate}}<span [innerHTML]=\"checkState('notFound')\"></span></td>\n    <td>{{'preview.notAvailable' | translate}} <span [innerHTML]=\"checkState('notAvailable')\"></span></td>\n    <td>{{'preview.notFinished' | translate}}<span [innerHTML]=\"checkState('notFinished')\"></span></td>\n  </tr>\n  <tr>\n    <td>{{'preview.repairNeeds' | translate}}<span [innerHTML]=\"checkState('repairNeeds')\"></span></td>\n    <td>{{'preview.outOfService' | translate}}<span [innerHTML]=\"checkState('outOfService')\"></span></td>\n    <td class=\"borderLeft\">{{'preview.passed' | translate}}</td>\n    <td class=\"borderRight\"><span [innerHTML]=\"checkStatedPassed()\"></span></td>\n  </tr>\n  <tr>\n    <td class=\"footerCell\">{{'preview.date' | translate}}: {{today | date: 'dd.MM.yyyy'}}</td>\n    <td class=\"footerCell\" colspan=\"2\">{{'preview.technician' | translate}}: {{user.name}}</td>\n    <td rowspan=\"2\" class=\"footerCell\">{{'preview.signatureClient' | translate}}</td>\n  </tr>\n  <tr>\n    <td class=\"footerCell\">{{stkService.selectedReport.testProcedure.version}}</td>\n    <td class=\"footerCell\">{{'preview.teamLeader' | translate}}</td>\n    <td class=\"footerCell\">{{'preview.charged' | translate}}</td>\n  </tr>\n</table>\n\n<hr>\n\n<div class=\"checkTableDiv\">\n  <table *ngFor=\"let testSection of stkService.selectedReport.testProcedure.testSections; let i = index\" class=\"checkTable\">\n    <tr *ngIf=\"i == 0\">\n\n      <td class=\"checkTableCol2 borderLeft\"><small>{{'preview.testParameter' | translate}}</small></td>\n      <td class=\"checkTableCol3 borderLeft textCenter\"><small>{{'preview.dimension' | translate}}</small></td>\n      <td class=\"checkTableCol3 borderLeft textCenter\"><small>{{'preview.minimum' | translate}}</small></td>\n      <td class=\"checkTableCol3 borderLeft textCenter\"><small>{{'preview.maximum' | translate}}</small></td>\n      <td class=\"checkTableCol3 borderLeft textCenter\"><small>{{'preview.result' | translate}}</small></td>\n      <td class=\"checkTableComment borderLeft borderRight\"><small>{{'preview.comment' | translate}}</small></td>\n\n    </tr>\n    <tr class=\"greyBack\">\n      <th class=\"checkTableCol2 borderLeft \">{{testSection.sectionTitle.description_de}}</th>\n      <th class=\"checkTableCol3 borderLeft borderLeft greyBack\"></th>\n      <th class=\"checkTableCol3 borderLeft borderLeft\"></th>\n      <th class=\"checkTableCol3 borderLeft borderLeft\"></th>\n      <th class=\"checkTableCol3 borderLeft borderLeft\"></th>\n      <th class=\"checkTableComment borderLeft borderRight\"></th>\n    </tr>\n    <tr *ngFor=\"let testPoint of testSection.testPoints\">\n      <td class=\"checkTableCol2 borderLeft\">{{testPoint.description_de}}</td>\n      <td class=\"checkTableCol3 borderLeft textCenter\">{{testPoint.dimension}}</td>\n      <td class=\"checkTableCol3 borderLeft textCenter\">{{testPoint.minValue}}</td>\n      <td class=\"checkTableCol3 borderLeft textCenter\">{{testPoint.maxValue}}</td>\n      <td class=\"checkTableCol3 borderLeft textCenter\">{{testPoint.result}}</td>\n      <td class=\"checkTableComment borderLeft borderRight\">{{testPoint.comment}}</td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/stk/preview/preview.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/stk/preview/preview.component.ts ***!
  \*************************************************************/
/*! exports provided: PreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_stk_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/stk.service */ "./src/app/services/stk.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(stkService) {
        this.today = Date.now();
        this.stkService = stkService;
    }
    PreviewComponent.prototype.checkServiceKit = function (num) {
        if (this.stkService.selectedReport.serviceKit == num) {
            return '&#x25C9; ';
        }
        return '&#x25EF; ';
    };
    PreviewComponent.prototype.checkChargeable = function (chargeable) {
        if (chargeable)
            return '&#10003;';
        return null;
    };
    PreviewComponent.prototype.checkState = function (param) {
        if (this.stkService.selectedReport.state == param)
            return '&#x25C9;';
        else
            return '&#x25EF;';
    };
    PreviewComponent.prototype.checkStatedPassed = function () {
        switch (this.stkService.selectedReport.state) {
            case 'passed': {
                return ' Ja &#x25C9; Nein &#x25EF;';
            }
            case 'outOfService': {
                return ' Ja &#x25EF; Nein &#x25C9;';
            }
            case 'repairNeeds': {
                return ' Ja &#x25EF; Nein &#x25C9;';
            }
            default: {
                return ' Ja &#x25EF; Nein &#x25EF;';
            }
        }
    };
    PreviewComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
    };
    PreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preview',
            template: __webpack_require__(/*! ./preview.component.html */ "./src/app/components/stk/preview/preview.component.html"),
            styles: [__webpack_require__(/*! ./preview.component.css */ "./src/app/components/stk/preview/preview.component.css")]
        }),
        __metadata("design:paramtypes", [_services_stk_service__WEBPACK_IMPORTED_MODULE_1__["StkService"]])
    ], PreviewComponent);
    return PreviewComponent;
}());



/***/ }),

/***/ "./src/app/components/stk/spare-parts/spare-parts.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/stk/spare-parts/spare-parts.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".numberField{\n  text-align: right;\n}\n\n.centerAlign {\n  text-align: center;\n}\n\nmat-form-field{\n  margin-right: 10px;\n}\n\ntable {\n  width: 100%;\n  text-align: left;\n  border-collapse: collapse;\n  margin-bottom: 20px;\n}\n\nth, td {\n  border-bottom: 1px solid black;\n}\n\n.hooverRow:hover {\n  background-color: #f5f5f5;\n}\n\n.mat-icon-button{\n  margin-top: 0;\n  padding-top: 0;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n\nbutton{\n  margin-top: 20px;\n}\n\nfieldset{\n  margin-top: 20px;\n}\n"

/***/ }),

/***/ "./src/app/components/stk/spare-parts/spare-parts.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/stk/spare-parts/spare-parts.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group [(selectedIndex)]=\"activeTab\">\n  <mat-tab label=\"{{'stk.add'|translate}}\">\n    <div>\n      <p *ngIf=\"maxNumberOfSpareParts()\">\n        <mat-icon>info</mat-icon>\n        {{'stk.maxNumberOfSpareParts'|translate}}\n      </p>\n      <form (ngSubmit)=\"onSubmitAdd()\" #sparePartForm=\"ngForm\" *ngIf=\"!maxNumberOfSpareParts()\">\n        <fieldset>\n          <legend>{{'stk.spareParts'|translate}}</legend>\n          <mat-form-field>\n            <input matInput [(ngModel)]=\"articleNr\" required name=\"articleNumber\">\n            <mat-label>{{'stk.articleNumber'|translate}}</mat-label>\n          </mat-form-field>\n\n          <mat-form-field>\n            <input matInput [(ngModel)]=\"description\" required name=\"description\">\n            <mat-label> {{'stk.description'|translate}}</mat-label>\n          </mat-form-field>\n\n          <mat-form-field>\n            <input matInput [(ngModel)]=\"serial\" required name=\"serial\">\n            <mat-label>{{'stk.serial'|translate}}</mat-label>\n          </mat-form-field>\n\n          <mat-form-field>\n            <input matInput [(ngModel)]=\"supplier\" required name=\"supplier\">\n            <mat-label>{{'stk.supplier'|translate}}</mat-label>\n          </mat-form-field>\n\n          <mat-form-field>\n            <input matInput class=\"numberField\" type=\"number\" step=\"1\"\n                   min=\"1\" max=\"100\" [(ngModel)]=\"amount\" required name=\"amount\">\n            <mat-label>{{'stk.amount'|translate}}</mat-label>\n          </mat-form-field>\n\n          <mat-form-field>\n            <input matInput class=\"numberField\" [(ngModel)]=\"price\" type=\"number\" name=\"price\" min=\"0\" max=\"99999\">\n            <mat-label>{{'stk.price'|translate}}</mat-label>\n          </mat-form-field>\n\n          <mat-checkbox [(ngModel)]=\"chargeable\" (keyup.enter)=\"chargeable = !chargeable\" name=\"chargeable\">\n            {{'stk.chargeable'|translate}}\n          </mat-checkbox>\n        </fieldset>\n        <button mat-flat-button type=\"submit\" [disabled]=\"!sparePartForm.form.valid\">{{'stk.add'|translate}}</button>\n      </form>\n    </div>\n  </mat-tab>\n\n  <mat-tab label=\"{{'stk.overview'|translate}}\">\n    <br>\n    <p *ngIf=\"noSparePartsAdded()\">\n      <mat-icon>info</mat-icon>\n      {{'stk.noSpareParts'|translate}}\n    </p>\n    <table *ngIf=\"!noSparePartsAdded()\">\n      <tr>\n        <th>{{ 'stk.articleNumber' | translate}}</th>\n        <th>{{ 'stk.description' | translate}}</th>\n        <th>{{ 'stk.serial' | translate}}</th>\n        <th>{{ 'stk.supplier' | translate}}</th>\n        <th class=\"centerAlign\">{{ 'stk.amount' | translate}}</th>\n        <th class=\"centerAlign\">{{ 'stk.price' | translate}}</th>\n        <th class=\"centerAlign\">{{ 'stk.total' | translate}}</th>\n        <th class=\"centerAlign\">{{ 'stk.chargeable' | translate}}</th>\n        <th></th>\n      </tr>\n      <tr *ngFor=\"let sparePart of stkService.selectedReport.spareParts; let i = index\" class=\"hooverRow\">\n        <td>{{sparePart.articleNr}}</td>\n        <td>{{sparePart.description}}</td>\n        <td>{{sparePart.serial}}</td>\n        <td>{{sparePart.supplier}}</td>\n        <td class=\"centerAlign\"> {{sparePart.amount}}</td>\n        <td class=\"centerAlign\">{{sparePart.price}}</td>\n        <td class=\"centerAlign\">\n          <span *ngIf=\"sparePart.price && sparePart.amount\">{{sparePart.price * sparePart.amount}}</span>\n        </td>\n        <td class=\"centerAlign\">\n          <span *ngIf=\"sparePart.chargeable\">&#10004;</span>\n        </td>\n        <td>\n          <button mat-icon-button (click)=\"openDialog(i)\" color=\"primary\">\n            <mat-icon aria-label=\"edit\">edit</mat-icon>\n          </button>\n          <button mat-icon-button (click)=\"removeSparePart(i)\" color=\"warn\">\n            <mat-icon aria-label=\"delete\">delete</mat-icon>\n          </button>\n        </td>\n      </tr>\n    </table>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/app/components/stk/spare-parts/spare-parts.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/stk/spare-parts/spare-parts.component.ts ***!
  \*********************************************************************/
/*! exports provided: SparePartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparePartsComponent", function() { return SparePartsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_stk_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/stk.service */ "./src/app/services/stk.service.ts");
/* harmony import */ var _models_sparePart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/sparePart */ "./src/app/models/sparePart.ts");
/* harmony import */ var _spareparts_edit_dialog_spareparts_edit_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spareparts-edit-dialog/spareparts-edit-dialog.component */ "./src/app/components/stk/spare-parts/spareparts-edit-dialog/spareparts-edit-dialog.component.ts");
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





var SparePartsComponent = /** @class */ (function () {
    function SparePartsComponent(stkService, dialog) {
        this.dialog = dialog;
        this.chargeable = false;
        this.activeTab = 0;
        this.year = new Date().getFullYear();
        this.serviceKits = [
            { viewValue: '', value: '-' },
            { viewValue: "(" + (this.year + 1) + ")", value: '1' },
            { viewValue: "(" + (this.year + 2) + ")", value: '2' },
            { viewValue: "(" + (this.year + 3) + ")", value: '3' },
            { viewValue: "(" + (this.year + 4) + ")", value: '4' },
            { viewValue: "(" + (this.year + 5) + ")", value: '5' },
            { viewValue: "(" + (this.year + 6) + ")", value: '6' },
            { viewValue: "(" + (this.year + 7) + ")", value: '7' },
            { viewValue: "(" + (this.year + 8) + ")", value: '8' },
            { viewValue: "(" + (this.year + 10) + ")", value: '10' },
            { viewValue: "(" + (this.year + 12) + ")", value: '12' }
        ];
        this.stkService = stkService;
    }
    SparePartsComponent.prototype.onSubmitAdd = function () {
        var sparePart = new _models_sparePart__WEBPACK_IMPORTED_MODULE_2__["SparePart"](this.articleNr, this.description, this.serial, this.supplier, this.amount, this.price, this.chargeable);
        this.stkService.selectedReport.addSparePart(sparePart);
        this.activeTab = 1;
        this.resetFields();
    };
    SparePartsComponent.prototype.resetFields = function () {
        this.articleNr = '';
        this.description = '';
        this.serial = '';
        this.supplier = '';
        this.amount = 0;
        this.price = 0;
        this.chargeable = false;
    };
    SparePartsComponent.prototype.removeSparePart = function (i) {
        this.stkService.selectedReport.removeSparePart(i);
        if (i == 0)
            this.activeTab = 0;
    };
    SparePartsComponent.prototype.openDialog = function (i) {
        var dialogRef = this.dialog.open(_spareparts_edit_dialog_spareparts_edit_dialog_component__WEBPACK_IMPORTED_MODULE_3__["SparepartsEditDialogComponent"], {
            data: {
                sparePart: this.stkService.selectedReport.spareParts[i],
                i: i,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    SparePartsComponent.prototype.maxNumberOfSpareParts = function () {
        if (!this.stkService.selectedReport.spareParts || this.stkService.selectedReport.spareParts.length < 10) {
            return false;
        }
        else
            return true;
    };
    SparePartsComponent.prototype.noSparePartsAdded = function () {
        if (!this.stkService.selectedReport.spareParts || this.stkService.selectedReport.spareParts.length == 0) {
            return true;
        }
        else
            return false;
    };
    SparePartsComponent.prototype.ngOnInit = function () {
    };
    SparePartsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spare-parts',
            template: __webpack_require__(/*! ./spare-parts.component.html */ "./src/app/components/stk/spare-parts/spare-parts.component.html"),
            styles: [__webpack_require__(/*! ./spare-parts.component.css */ "./src/app/components/stk/spare-parts/spare-parts.component.css")]
        }),
        __metadata("design:paramtypes", [_services_stk_service__WEBPACK_IMPORTED_MODULE_1__["StkService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], SparePartsComponent);
    return SparePartsComponent;
}());



/***/ }),

/***/ "./src/app/components/stk/spare-parts/spareparts-edit-dialog/spareparts-edit-dialog.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/stk/spare-parts/spareparts-edit-dialog/spareparts-edit-dialog.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".numberField{\n  text-align: right;\n}\n\nmat-form-field{\n  margin-right: 10px;\n}\n\n.button-row button,\n.button-row a {\n  margin-right: 8px;\n}\n"

/***/ }),

/***/ "./src/app/components/stk/spare-parts/spareparts-edit-dialog/spareparts-edit-dialog.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/stk/spare-parts/spareparts-edit-dialog/spareparts-edit-dialog.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title=\"\">{{ 'stk.edit' | translate}}</h2>\n\n<mat-dialog-content>\n  <form (ngSubmit)=\"onSubmit()\" #sparePartForm=\"ngForm\">\n    <mat-form-field>\n      <input matInput\n             placeholder=\"{{ 'stk.articleNumber' | translate}}\" [(ngModel)]=\"sparePart.articleNr\"\n             required\n             name=\"articleNumber\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput\n             placeholder=\"{{ 'stk.description' | translate}}\" [(ngModel)]=\"sparePart.description\"\n             required\n             name=\"description\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder=\"{{ 'stk.serial' | translate}}\" [(ngModel)]=\"sparePart.serial\"\n             required\n             name=\"serial\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder=\"{{ 'stk.supplier' | translate}}\" [(ngModel)]=\"sparePart.supplier\"\n             required\n             name=\"supplier\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput class=\"numberField\" placeholder=\"{{ 'stk.amount' | translate}}\"\n             type=\"number\"\n             step=\"1\"\n             min=\"1\"\n             max=\"50\"\n             required\n             name=\"amount\"\n             [(ngModel)]=\"sparePart.amount\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput class=\"numberField\"\n             placeholder=\"{{ 'stk.price' | translate}}\"\n             [(ngModel)]=\"sparePart.price\"\n             type=\"number\"\n             name=\"price\"\n             min=\"0\"\n             max=\"99999\"\n      >\n    </mat-form-field>\n\n    <br>\n    <mat-checkbox [(ngModel)]=\"sparePart.chargeable\"\n                  (keyup.enter)=\"sparePart.chargeable = !sparePart.chargeable\"\n                  name=\"chargeable\">\n      {{ 'stk.chargeable' | translate}}\n    </mat-checkbox>\n    <br>\n\n    <div class=\"button-row\">\n      <button mat-button mat-dialog-close>{{ 'stk.cancel' | translate}}</button>\n      <button mat-flat-button type=\"submit\" [disabled]=\"!sparePartForm.form.valid\">{{ 'stk.save' | translate}}</button>\n    </div>\n\n  </form>\n</mat-dialog-content>\n"

/***/ }),

/***/ "./src/app/components/stk/spare-parts/spareparts-edit-dialog/spareparts-edit-dialog.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/stk/spare-parts/spareparts-edit-dialog/spareparts-edit-dialog.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: SparepartsEditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparepartsEditDialogComponent", function() { return SparepartsEditDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_stk_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/stk.service */ "./src/app/services/stk.service.ts");
/* harmony import */ var _models_sparePart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/sparePart */ "./src/app/models/sparePart.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var SparepartsEditDialogComponent = /** @class */ (function () {
    function SparepartsEditDialogComponent(stkService, dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.sparePart = new _models_sparePart__WEBPACK_IMPORTED_MODULE_3__["SparePart"](this.data.sparePart.articleNr, this.data.sparePart.description, this.data.sparePart.serial, this.data.sparePart.supplier, this.data.sparePart.amount, this.data.sparePart.price, this.data.sparePart.chargeable);
        this.indexOfSparePart = this.data.i;
        this.stkService = stkService;
    }
    SparepartsEditDialogComponent.prototype.ngOnInit = function () {
    };
    SparepartsEditDialogComponent.prototype.onSubmit = function () {
        this.stkService.selectedReport.spareParts.splice(this.indexOfSparePart, 1, this.sparePart);
        this.dialogRef.close();
    };
    SparepartsEditDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spareparts-edit-dialog',
            template: __webpack_require__(/*! ./spareparts-edit-dialog.component.html */ "./src/app/components/stk/spare-parts/spareparts-edit-dialog/spareparts-edit-dialog.component.html"),
            styles: [__webpack_require__(/*! ./spareparts-edit-dialog.component.css */ "./src/app/components/stk/spare-parts/spareparts-edit-dialog/spareparts-edit-dialog.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_stk_service__WEBPACK_IMPORTED_MODULE_2__["StkService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], SparepartsEditDialogComponent);
    return SparepartsEditDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/stk/stk.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/stk/stk.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  max-width: 1300px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 30px;\n}\n\n.green{\n  color: green;\n  vertical-align: middle;\n  padding-bottom: 3px;\n  margin-left: 10px;\n}\n\n.orange{\n  color: orangered;\n  vertical-align: middle;\n  padding-bottom: 3px;\n  margin-left: 10px;\n}\n\nbutton{\n  margin-right: 10px;\n\n}\n\n.deleteButton{\n  float: right;\n}\n"

/***/ }),

/***/ "./src/app/components/stk/stk.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/stk/stk.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n\n  <mat-card-header *ngIf=\"stkService.selectedReport\">\n    <mat-card-title>\n      <h3>\n        {{\"stk.id\"|translate}}:\n        {{stkService.selectedReport.device.id}}\n      </h3>\n    </mat-card-title>\n    <mat-card-subtitle>\n      <h3>\n        {{\"stk.model\"|translate}}:\n        {{stkService.selectedReport.device.model}}\n      </h3>\n    </mat-card-subtitle>\n  </mat-card-header>\n\n  <mat-card-content *ngIf=\"!stkService.selectedReport\">\n    <h2>{{\"stk.noProtocolSelected\"|translate}}</h2>\n  </mat-card-content>\n\n  <mat-card-content cdk-scrollable=\"true\" *ngIf=\"stkService.selectedReport\">\n    <mat-accordion>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            <b>{{\"stk.information\"|translate}}</b>\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <app-infos></app-infos>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            <b>{{\"stk.tools\"|translate}}</b>\n            &nbsp; ({{stkService.numberOfTools()}})\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <app-tools></app-tools>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            <b>{{\"stk.spareParts\"|translate}}</b>\n            &nbsp; ({{stkService.numberOfSpareParts()}})\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <app-spare-parts></app-spare-parts>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            <b>{{\"stk.work\"|translate}}</b>\n            &nbsp; ({{stkService.numberOfWork()}})\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <app-work></app-work>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            <b>{{\"stk.testProcedure\"|translate}}</b>\n            <mat-icon *ngIf=\"stkService.selectedReport.testProcedure.validationCheck() == true\" class=\"green\">check_circle</mat-icon>\n            <mat-icon *ngIf=\"stkService.selectedReport.testProcedure.validationCheck() == false\" class=\"orange\">warning</mat-icon>\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <app-test-procedure></app-test-procedure>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            <b>{{\"stk.conclusion\"|translate}}</b>\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <app-conclusion></app-conclusion>\n      </mat-expansion-panel>\n    </mat-accordion>\n\n  </mat-card-content>\n\n  <mat-card-actions *ngIf=\"stkService.selectedReport\">\n    <button mat-flat-button (click)=\"openDialog()\">{{\"stk.preview\"|translate}}</button>\n    <button mat-flat-button (click)=\"saveReport()\">\n      {{\"stk.save\"|translate}}\n    </button>\n    <button mat-flat-button\n            (click)=\"uploadReport()\"\n            [disabled]=\"!stkService.selectedReport.isValid()\">\n      {{\"stk.send\"|translate}}\n    </button>\n    <button mat-flat-button class=\"deleteButton\"\n            (click)=\"removeSelectedReport()\" color=\"warn\">\n      {{\"stk.delete\"|translate}}\n    </button>\n  </mat-card-actions>\n\n</mat-card >\n"

/***/ }),

/***/ "./src/app/components/stk/stk.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/stk/stk.component.ts ***!
  \*************************************************/
/*! exports provided: StkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StkComponent", function() { return StkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_stk_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/stk.service */ "./src/app/services/stk.service.ts");
/* harmony import */ var _preview_preview_report_dialog_preview_report_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preview/preview-report-dialog/preview-report-dialog.component */ "./src/app/components/stk/preview/preview-report-dialog/preview-report-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StkComponent = /** @class */ (function () {
    function StkComponent(stkService, dialog, flashMessage, translate) {
        this.dialog = dialog;
        this.flashMessage = flashMessage;
        this.translate = translate;
        this.successDe = 'Protokoll wurde erfolgreich hochgeladen';
        this.successEn = 'Report has been successfully uploaded';
        this.errorDe = 'Fehler beim Hochladen des Protokolls!';
        this.errorEn = 'Error while uploading report!';
        this.stkService = stkService;
    }
    StkComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_preview_preview_report_dialog_preview_report_dialog_component__WEBPACK_IMPORTED_MODULE_2__["PreviewReportDialogComponent"], {
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    StkComponent.prototype.getSuccessMessage = function () {
        if (this.translate.currentLang == 'de')
            return this.successDe;
        else
            return this.successEn;
    };
    StkComponent.prototype.getErrorMessage = function () {
        if (this.translate.currentLang == 'de')
            return this.errorDe;
        else
            return this.errorEn;
    };
    StkComponent.prototype.uploadReport = function () {
        var _this = this;
        this.stkService.uploadReport().subscribe(function (data) {
            _this.flashMessage.show(_this.getSuccessMessage(), { cssClass: 'alert-success', timeout: 3000 });
            _this.stkService.removeSelectedReport();
        }, function (err) {
            _this.flashMessage.show(_this.getErrorMessage(), { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        });
    };
    StkComponent.prototype.removeSelectedReport = function () {
        this.stkService.removeSelectedReport();
    };
    StkComponent.prototype.saveReport = function () {
        this.stkService.saveToLocalStorage();
    };
    StkComponent.prototype.ngOnInit = function () {
    };
    StkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stk',
            template: __webpack_require__(/*! ./stk.component.html */ "./src/app/components/stk/stk.component.html"),
            styles: [__webpack_require__(/*! ./stk.component.css */ "./src/app/components/stk/stk.component.css")]
        }),
        __metadata("design:paramtypes", [_services_stk_service__WEBPACK_IMPORTED_MODULE_1__["StkService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], StkComponent);
    return StkComponent;
}());



/***/ }),

/***/ "./src/app/components/stk/test-procedure/test-procedure.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/stk/test-procedure/test-procedure.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field{\n  padding-right: 10px;\n}\n\nmat-divider{\n  margin-top: 20px;\n}\n\n.testPoint{\n  margin-bottom: 30px;\n}\n\n.hint{\n  color: blue;\n}\n\n.green{\n  color: green;\n  vertical-align: middle;\n  padding-bottom: 3px;\n}\n\n.orange{\n  color: orangered;\n  vertical-align: middle;\n  padding-bottom: 3px;\n}\n\n.black{\n  vertical-align: middle;\n  padding-bottom: 3px;\n}\n\n.sectionTitle{\n  margin-right: 10px;\n}\n"

/***/ }),

/***/ "./src/app/components/stk/test-procedure/test-procedure.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/stk/test-procedure/test-procedure.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-vertical-stepper [linear]=\"false\" #stepper *ngIf=\"checkTestProcedure()\">\n  <mat-step *ngFor=\"let testSection of testProcedure.testSections; let i = index\">\n    <ng-template matStepLabel>\n      <b>\n        <span class=\"sectionTitle\" *ngIf=\"translateService.currentLang == 'de'\">{{testSection.sectionTitle.description_de}}</span>\n        <span class=\"sectionTitle\"*ngIf=\"translateService.currentLang == 'en'\">{{testSection.sectionTitle.description_en}}</span>\n      </b>\n\n      <mat-icon *ngIf=\"testSection.validationCheck() == true\" class=\"green\">check_circle</mat-icon>\n      <mat-icon *ngIf=\"testSection.validationCheck() == false\" class=\"orange\">warning</mat-icon>\n      <mat-icon *ngIf=\"testSection.validationCheck() == null\" class=\"black\">edit</mat-icon>\n\n    </ng-template>\n\n      <div *ngFor=\"let testPoint of testSection.testPoints\" class=\"testPoint\">\n        <div>\n        <span matTooltip=\"{{ 'stk.nr' | translate }}: {{testPoint.nr}}\">\n          <b *ngIf=\"translateService.currentLang == 'de'\">{{testPoint.description_de}}</b>\n          <b *ngIf=\"translateService.currentLang == 'en'\">{{testPoint.description_en}}</b>\n        </span>\n        </div>\n        <div *ngIf=\"testPoint.maxValue || testPoint.minValue\" class=\"hint\">\n          (\n          <span *ngIf=\"testPoint.minValue || !testPoint.minValue\">{{testPoint.minValue}} &nbsp;</span>\n          <span *ngIf=\"testPoint.maxValue\">- {{testPoint.maxValue}} &nbsp;</span>\n          <span *ngIf=\"testPoint.dimension\">{{testPoint.dimension}}</span>\n          )\n        </div>\n\n        <mat-form-field class=\"maxWidth\">\n\n          <!-- Is Showed when setpoint = \"i.O\" -->\n          <mat-select *ngIf=\"!checkSetPoint(testPoint)\" placeholder=\"{{ 'stk.result' | translate }}\"\n                      [(value)]=\"testPoint.result\">\n            <mat-option value=\"i.O.\">\n              <mat-icon matListIcon>thumb_up</mat-icon>\n            </mat-option>\n            <mat-option value=\"X\">\n              <mat-icon mat-list-icon>thumb_down</mat-icon>\n            </mat-option>\n            <mat-option value=\"N.V.\">\n              <mat-icon>clear</mat-icon>\n            </mat-option>\n          </mat-select>\n\n          <input matInput *ngIf=\"checkSetPoint(testPoint)\" placeholder=\"{{ 'stk.result' | translate }}\"\n                 [(ngModel)]=\"testPoint.result\">\n\n          <span matSuffix *ngIf=\"checkSetPoint(testPoint)\">\n          {{testPoint.dimension}}\n        </span>\n\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"{{ 'stk.comment' | translate }}\" [(ngModel)]=\"testPoint.comment\">\n        </mat-form-field>\n        <mat-icon *ngIf=\"testPoint.validationCheck()\" class=\"green\">check_circle</mat-icon>\n        <mat-icon *ngIf=\"testPoint.validationCheck() == false\" class=\"orange\">warning</mat-icon>\n        <mat-divider></mat-divider>\n      </div>\n      <div *ngIf=\"i != testProcedure.testSections.length -1\">\n        <button mat-button matStepperNext>{{ 'stk.next' | translate }}</button>\n      </div>\n  </mat-step>\n</mat-vertical-stepper>\n"

/***/ }),

/***/ "./src/app/components/stk/test-procedure/test-procedure.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/stk/test-procedure/test-procedure.component.ts ***!
  \***************************************************************************/
/*! exports provided: TestProcedureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestProcedureComponent", function() { return TestProcedureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_stk_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/stk.service */ "./src/app/services/stk.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestProcedureComponent = /** @class */ (function () {
    function TestProcedureComponent(stkService, translateService) {
        this.stkService = stkService;
        this.translateService = translateService;
    }
    TestProcedureComponent.prototype.checkTestProcedure = function () {
        if (this.stkService.selectedReport.testProcedure) {
            this.testProcedure = this.stkService.selectedReport.testProcedure;
            return true;
        }
        return false;
    };
    TestProcedureComponent.prototype.checkSetPoint = function (testPoint) {
        if (testPoint.dimension) {
            if (testPoint.dimension == 'i.O.')
                return false;
        }
        return true;
    };
    TestProcedureComponent.prototype.ngOnInit = function () { };
    TestProcedureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test-procedure',
            template: __webpack_require__(/*! ./test-procedure.component.html */ "./src/app/components/stk/test-procedure/test-procedure.component.html"),
            styles: [__webpack_require__(/*! ./test-procedure.component.css */ "./src/app/components/stk/test-procedure/test-procedure.component.css")]
        }),
        __metadata("design:paramtypes", [_services_stk_service__WEBPACK_IMPORTED_MODULE_1__["StkService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], TestProcedureComponent);
    return TestProcedureComponent;
}());



/***/ }),

/***/ "./src/app/components/stk/tools/tools.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/stk/tools/tools.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*mat-chip {\n  max-width: 200px;\n}*/\n\nh1{\n  font-size: 12pt;\n}\n\nmat-form-field{\n  margin-right: 10px;\n}\n\ntable{\n  text-align: left;\n  width: 100%;\n  max-width: 400px;\n  border-collapse: collapse;\n}\n\ntr, td, th{\n  border-bottom: solid 1px black;\n}\n\n.hooverRow:hover {\n  background-color: #f5f5f5;\n}\n"

/***/ }),

/***/ "./src/app/components/stk/tools/tools.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/stk/tools/tools.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n  <mat-tab label=\"{{'stk.overview'|translate}}\">\n\n    <br>\n    <form (ngSubmit)=\"addTool(toolId)\" #toolAddForm=\"ngForm\" *ngIf=\"!maxNumberOfTools()\">\n      <mat-form-field>\n        <input matInput\n               [(ngModel)]=\"toolId\"\n               [disabled]=\"!allowAdding()\"\n               name=\"toolId\"\n               maxlength=\"8\"\n               minlength=\"5\">\n        <mat-label>{{'stk.id'|translate}}</mat-label>\n      </mat-form-field>\n\n      <button mat-flat-button type=\"submit\" [disabled]=\"!toolAddForm.form.valid || isEmpty()\">\n        {{'stk.add'|translate}}\n      </button>\n    </form>\n\n    <div>\n      <p *ngIf=\"maxNumberOfTools()\">\n        <mat-icon>info</mat-icon>\n        {{'stk.maxNumberOfTools'|translate}}\n      </p>\n      <div *ngIf=\"noToolsAdded()\">\n        <mat-icon>info</mat-icon>\n        {{'stk.noToolsUsed'|translate}}\n      </div>\n      <fieldset *ngIf=\"!noToolsAdded()\">\n        <legend>{{'stk.usedTools'|translate}}</legend>\n        <mat-chip-list>\n          <mat-chip *ngFor=\"let tool of stkService.selectedReport.tools; let i = index\">\n            <b>\n              {{tool}}\n            </b>\n            <mat-icon matChipRemove (click)=\"removeTool(i)\">\n              cancel\n            </mat-icon>\n          </mat-chip>\n          <br>\n        </mat-chip-list>\n      </fieldset>\n    </div>\n  </mat-tab>\n\n  <mat-tab label=\"{{'stk.favorites'|translate}}\">\n    <br>\n    <table>\n      <tr>\n        <th>{{'stk.id'|translate}}</th>\n        <th>{{'stk.description'|translate}}</th>\n        <th>\n        </th>\n      </tr>\n      <tr *ngFor=\"let tool of toolService.tools\" class=\"hooverRow\">\n        <td>{{tool.id}}</td>\n        <td>{{tool.description}}</td>\n        <td>\n          <button mat-icon-button color=\"primary\" [disabled]=\"checkTool(tool.id)\" (click)=\"addTool(tool.id)\">\n            <mat-icon aria-label=\"add\">add_circle</mat-icon>\n          </button>\n          <button mat-icon-button color=\"warn\" [disabled]=\"!idAlreadyUsed(tool.id)\" (click)=\"removeToolById(tool.id)\">\n            <mat-icon aria-label=\"remove\">remove_circle</mat-icon>\n          </button>\n        </td>\n      </tr>\n    </table>\n  </mat-tab>\n</mat-tab-group>\n\n"

/***/ }),

/***/ "./src/app/components/stk/tools/tools.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/stk/tools/tools.component.ts ***!
  \*********************************************************/
/*! exports provided: ToolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsComponent", function() { return ToolsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tool_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/tool.service */ "./src/app/services/tool.service.ts");
/* harmony import */ var _services_stk_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/stk.service */ "./src/app/services/stk.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToolsComponent = /** @class */ (function () {
    function ToolsComponent(toolService, stkService) {
        this.stkService = stkService;
        this.toolService = toolService;
    }
    ToolsComponent.prototype.allowAdding = function () {
        var tools = this.stkService.selectedReport.tools;
        if (tools == null)
            return true;
        if (tools.length < 5)
            return true;
        return false;
    };
    ToolsComponent.prototype.addTool = function (toolId) {
        if (toolId != null && toolId != "") {
            if (!this.idAlreadyUsed(toolId)) {
                this.stkService.selectedReport.addTool(toolId);
                this.toolId = "";
            }
            else {
                // Here should a alert be triggered (Already exist)
            }
        }
    };
    ToolsComponent.prototype.removeTool = function (i) {
        this.stkService.selectedReport.removeTool(i);
    };
    ToolsComponent.prototype.idAlreadyUsed = function (id) {
        var report = this.stkService.selectedReport;
        var result = false;
        if (report.tools != null) {
            var tools = report.tools;
            for (var i = 0; i < tools.length; i++) {
                if (tools[i].localeCompare(id) == 0) {
                    result = true;
                }
            }
        }
        return result;
    };
    ToolsComponent.prototype.checkTool = function (toolId) {
        var tools = this.stkService.selectedReport.tools;
        if (tools != null) {
            if (tools.length >= 5)
                return true;
            if (this.idAlreadyUsed(toolId))
                return true;
        }
        return false;
    };
    ToolsComponent.prototype.removeToolById = function (id) {
        var report = this.stkService.selectedReport;
        if (report.tools != null) {
            var tools = report.tools;
            for (var i = 0; i < tools.length; i++) {
                if (tools[i].localeCompare(id) == 0) {
                    this.removeTool(i);
                    break;
                }
            }
        }
    };
    ToolsComponent.prototype.isEmpty = function () {
        if (!this.toolId || this.toolId == "")
            return true;
        return false;
    };
    ToolsComponent.prototype.maxNumberOfTools = function () {
        var result = false;
        if (this.stkService.selectedReport.tools)
            if (this.stkService.selectedReport.tools.length > 4)
                result = true;
        return result;
    };
    ToolsComponent.prototype.noToolsAdded = function () {
        var result = false;
        if (!this.stkService.selectedReport.tools || this.stkService.selectedReport.tools.length == 0)
            result = true;
        return result;
    };
    ToolsComponent.prototype.ngOnInit = function () {
        if (!this.toolService.tools)
            this.toolService.getTools();
    };
    ToolsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tools',
            template: __webpack_require__(/*! ./tools.component.html */ "./src/app/components/stk/tools/tools.component.html"),
            styles: [__webpack_require__(/*! ./tools.component.css */ "./src/app/components/stk/tools/tools.component.css")]
        }),
        __metadata("design:paramtypes", [_services_tool_service__WEBPACK_IMPORTED_MODULE_1__["ToolService"],
            _services_stk_service__WEBPACK_IMPORTED_MODULE_2__["StkService"]])
    ], ToolsComponent);
    return ToolsComponent;
}());



/***/ }),

/***/ "./src/app/components/stk/work/work-edit-dialog/work-edit-dialog.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/stk/work/work-edit-dialog/work-edit-dialog.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".numberField{\n  text-align: right;\n}\n\nmat-form-field{\n  margin-right: 10px;\n}\n\n.button-row button,\n.button-row a {\n  margin-right: 8px;\n}\n\n"

/***/ }),

/***/ "./src/app/components/stk/work/work-edit-dialog/work-edit-dialog.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/stk/work/work-edit-dialog/work-edit-dialog.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title=\"\">{{ 'stk.edit' | translate}}</h2>\n\n<mat-dialog-content>\n  <form (ngSubmit)=\"onSubmit()\" #workForm=\"ngForm\">\n    <mat-form-field>\n      <mat-select placeholder=\"{{ 'stk.service' | translate}}\"\n                  [(ngModel)]=\"work.service\"\n                  required\n                  name=\"service\">\n        <mat-option value=\"STK\">STK</mat-option>\n        <mat-option value=\"REP\">REP</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"dp3\"\n             placeholder=\"{{ 'stk.date' | translate}}\"\n             disabled [(ngModel)]=\"work.date\"\n             required\n             name=\"date\"\n             [matDatepickerFilter]=\"dateFilter\">\n      <mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\n      <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput\n             placeholder=\"{{ 'stk.technician' | translate}}\"\n             [(ngModel)]=\"work.technician\"\n             required\n             name=\"technician\"\n             minlength=\"4\"\n             maxlength=\"4\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput class=\"numberField\"\n             placeholder=\"{{ 'stk.workload' | translate}}\"\n             type=\"number\"\n             step=\"0.25\"\n             min=\"0\"\n             max=\"10\"\n             [(ngModel)]=\"work.workload\"\n             required\n             name=\"workload\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput class=\"numberField\"\n             placeholder=\"{{ 'stk.travelTime' | translate}}\"\n             type=\"number\"\n             step=\"0.25\"\n             min=\"0\"\n             max=\"10\"\n             [(ngModel)]=\"work.travelTime\"\n             required\n             name=\"travelTime\">\n    </mat-form-field>\n\n    <br>\n    <mat-checkbox [(ngModel)]=\"work.chargeable\"\n                  (keyup.enter)=\"work.chargeable = !work.chargeable\"\n                  name=\"chargeable\">\n      {{ 'stk.chargeable' | translate}}\n    </mat-checkbox>\n    <br>\n    <div class=\"button-row\">\n      <button mat-button mat-dialog-close>{{ 'stk.cancel' | translate}}</button>\n      <button mat-flat-button color=\"primary\" type=\"submit\" [disabled]=\"!workForm.form.valid\">\n        {{ 'stk.save' | translate}}\n      </button>\n    </div>\n\n  </form>\n\n</mat-dialog-content>\n"

/***/ }),

/***/ "./src/app/components/stk/work/work-edit-dialog/work-edit-dialog.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/stk/work/work-edit-dialog/work-edit-dialog.component.ts ***!
  \************************************************************************************/
/*! exports provided: WorkEditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkEditDialogComponent", function() { return WorkEditDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_stk_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/stk.service */ "./src/app/services/stk.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_work__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/work */ "./src/app/models/work.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var WorkEditDialogComponent = /** @class */ (function () {
    function WorkEditDialogComponent(stkService, dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.work = new _models_work__WEBPACK_IMPORTED_MODULE_3__["Work"](this.data.work.service, this.data.work.date, this.data.work.technician, this.data.work.workload, this.data.work.travelTime, this.data.work.chargeable);
        this.indexOfWork = this.data.i;
        this.dateFilter = function (d) {
            var date = new Date();
            return date > d;
        };
        this.stkService = stkService;
    }
    WorkEditDialogComponent.prototype.ngOnInit = function () {
    };
    WorkEditDialogComponent.prototype.onSubmit = function () {
        this.work.technician = this.work.technician.toUpperCase();
        this.stkService.selectedReport.work.splice(this.indexOfWork, 1, this.work);
        this.dialogRef.close();
    };
    WorkEditDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-work-edit-dialog',
            template: __webpack_require__(/*! ./work-edit-dialog.component.html */ "./src/app/components/stk/work/work-edit-dialog/work-edit-dialog.component.html"),
            styles: [__webpack_require__(/*! ./work-edit-dialog.component.css */ "./src/app/components/stk/work/work-edit-dialog/work-edit-dialog.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_stk_service__WEBPACK_IMPORTED_MODULE_1__["StkService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], WorkEditDialogComponent);
    return WorkEditDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/stk/work/work.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/stk/work/work.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".numberField{\n  text-align: right;\n}\n\n.centerAlign{\n  text-align: center;\n}\n\nmat-form-field{\n  margin-right: 10px;\n}\n\ntable {\n  width: 100%;\n  text-align: left;\n  border-collapse: collapse;\n}\n\nth, td {\n  border-bottom: 1px solid black;\n}\n\n.hooverRow:hover {\n  background-color: #f5f5f5;\n}\n\n.mat-icon-button{\n  margin-top: 0;\n  padding-top: 0;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n\nbutton{\n  margin-top: 20px;\n}\n\nfieldset{\n  margin-top: 20px;\n}\n"

/***/ }),

/***/ "./src/app/components/stk/work/work.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/stk/work/work.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group [(selectedIndex)]=\"activeTab\">\n  <mat-tab label=\"{{ 'stk.add' | translate}}\">\n    <div>\n\n      <p *ngIf=\"maxNumberOfWork()\">\n        <mat-icon>info</mat-icon>\n        {{'stk.maxNumberOfWork'|translate}}\n      </p>\n\n      <form (ngSubmit)=\"onSubmitAdd()\" #workForm=\"ngForm\" *ngIf=\"!maxNumberOfWork()\">\n        <fieldset>\n          <legend>{{ 'stk.work' | translate}}</legend>\n\n          <mat-form-field>\n            <mat-select [(ngModel)]=\"service\" name=\"service\" required>\n              <mat-option value=\"STK\">STK</mat-option>\n              <mat-option value=\"REP\">REP</mat-option>\n            </mat-select>\n            <mat-label>{{ 'stk.service' | translate}}</mat-label>\n          </mat-form-field>\n\n          <mat-form-field>\n            <input matInput\n                   [matDatepicker]=\"dp3\"\n                   disabled\n                   [(ngModel)]=\"date\"\n                   name=\"date\"\n                   required\n                   [matDatepickerFilter]=\"dateFilter\">\n            <mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\n            <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\n            <mat-label> {{ 'stk.date' | translate}}</mat-label>\n          </mat-form-field>\n\n          <mat-form-field>\n            <input matInput [(ngModel)]=\"technician\"\n                   name=\"technician\"\n                   required\n                   minlength=\"4\"\n                   maxlength=\"4\">\n            <mat-label>{{ 'stk.technician' | translate}}</mat-label>\n          </mat-form-field>\n\n          <mat-form-field>\n            <input class=\"numberField\"\n                   matInput\n                   type=\"number\"\n                   step=\"0.25\"\n                   min=\"0\"\n                   max=\"10\"\n                   [(ngModel)]=\"workload\"\n                   name=\"workload\"\n                   required>\n            <mat-label>{{ 'stk.workload' | translate}}</mat-label>\n          </mat-form-field>\n\n          <mat-form-field>\n            <input matInput class=\"numberField\"\n                   type=\"number\"\n                   step=\"0.25\"\n                   min=\"0\"\n                   max=\"10\"\n                   [(ngModel)]=\"travelTime\"\n                   name=\"travelTime\"\n                   required>\n            <mat-label>{{ 'stk.travelTime' | translate}}</mat-label>\n          </mat-form-field>\n\n          <mat-checkbox [(ngModel)]=\"chargeable\" (keyup.spacebar)=\"chargeable = !chargeable\" name=\"chargeable\">\n            {{ 'stk.chargeable' | translate}}\n          </mat-checkbox>\n        </fieldset>\n        <button mat-flat-button type=\"submit\" [disabled]=\"!workForm.form.valid\">{{ 'stk.add' | translate}}</button>\n      </form>\n    </div>\n  </mat-tab>\n\n  <mat-tab label=\"{{ 'stk.overview' | translate}}\">\n    <br>\n\n    <p *ngIf=\"noWorkAdded()\">\n      <mat-icon>info</mat-icon>\n      {{'stk.noWork'|translate}}\n    </p>\n\n    <table *ngIf=\"!noWorkAdded()\">\n      <tr>\n        <th>{{ 'stk.service' | translate}}</th>\n        <th>{{ 'stk.date' | translate}}</th>\n        <th>{{ 'stk.technician' | translate}}</th>\n        <th class=\"centerAlign\">{{ 'stk.workload' | translate}}</th>\n        <th class=\"centerAlign\">{{ 'stk.travelTime' | translate}}</th>\n        <th class=\"centerAlign\">{{ 'stk.total' | translate}}</th>\n        <th class=\"centerAlign\">{{ 'stk.chargeable' | translate}}</th>\n        <th></th>\n      </tr>\n      <tr *ngFor=\"let work of stkService.selectedReport.work; let i = index\" class=\"hooverRow\">\n        <td>{{work.service}}</td>\n        <td>{{work.date | date: 'dd.MM.yyyy'}}</td>\n        <td>{{work.technician}}</td>\n        <td class=\"centerAlign\">{{work.workload}}</td>\n        <td class=\"centerAlign\">{{work.travelTime}}</td>\n        <td class=\"centerAlign\">{{work.workload + work.travelTime}}</td>\n        <td class=\"centerAlign\">\n          <span *ngIf=\"work.chargeable\">&#10004;</span>\n        </td>\n        <td>\n          <button mat-icon-button color=\"primary\" (click)=\"openDialog(i)\">\n            <mat-icon aria-label=\"edit\">edit</mat-icon>\n          </button>\n          <button mat-icon-button color=\"warn\" (click)=\"removeWork(i)\">\n            <mat-icon aria-label=\"delete\">delete</mat-icon>\n          </button>\n        </td>\n      </tr>\n    </table>\n  </mat-tab>\n\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/app/components/stk/work/work.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/stk/work/work.component.ts ***!
  \*******************************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_work__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/work */ "./src/app/models/work.ts");
/* harmony import */ var _services_stk_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/stk.service */ "./src/app/services/stk.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _work_edit_dialog_work_edit_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./work-edit-dialog/work-edit-dialog.component */ "./src/app/components/stk/work/work-edit-dialog/work-edit-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WorkComponent = /** @class */ (function () {
    function WorkComponent(stkService, dialog) {
        this.dialog = dialog;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.activeTab = 0;
        this.service = "STK";
        this.date = new Date();
        this.technician = this.user.username.toUpperCase();
        this.workload = 0;
        this.travelTime = 0;
        this.chargeable = false;
        this.dateFilter = function (d) {
            var date = new Date();
            return date > d;
        };
        this.stkService = stkService;
    }
    WorkComponent.prototype.onSubmitAdd = function () {
        var work = new _models_work__WEBPACK_IMPORTED_MODULE_1__["Work"](this.service, this.date, this.technician.toLocaleUpperCase(), this.workload, this.travelTime, this.chargeable);
        this.stkService.selectedReport.addWork(work);
        this.activeTab = 1;
        this.resetFields();
    };
    WorkComponent.prototype.resetFields = function () {
        this.service = "STK";
        this.date = new Date();
        this.technician = this.user.username.toUpperCase();
        this.workload = 0;
        this.travelTime = 0;
        this.chargeable = false;
    };
    WorkComponent.prototype.removeWork = function (i) {
        this.stkService.selectedReport.removeWork(i);
    };
    WorkComponent.prototype.openDialog = function (i) {
        var dialogRef = this.dialog.open(_work_edit_dialog_work_edit_dialog_component__WEBPACK_IMPORTED_MODULE_4__["WorkEditDialogComponent"], {
            data: {
                work: this.stkService.selectedReport.work[i],
                i: i,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    WorkComponent.prototype.maxNumberOfWork = function () {
        if (!this.stkService.selectedReport.work || this.stkService.selectedReport.work.length < 5) {
            return false;
        }
        else
            return true;
    };
    WorkComponent.prototype.noWorkAdded = function () {
        if (!this.stkService.selectedReport.work || this.stkService.selectedReport.work.length == 0) {
            return true;
        }
        else
            return false;
    };
    WorkComponent.prototype.ngOnInit = function () { };
    WorkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-work',
            template: __webpack_require__(/*! ./work.component.html */ "./src/app/components/stk/work/work.component.html"),
            styles: [__webpack_require__(/*! ./work.component.css */ "./src/app/components/stk/work/work.component.css")]
        }),
        __metadata("design:paramtypes", [_services_stk_service__WEBPACK_IMPORTED_MODULE_2__["StkService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "./src/app/components/unfinished-reports/unfinished-reports.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/unfinished-reports/unfinished-reports.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  max-width: 1300px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 30px;\n}\n\ntable{\n  width: 100%;\n  text-align: left;\n  border-collapse: collapse;\n}\n\ntr{\n  border-bottom: 1px solid black;\n}\n\ntr:not(:first-child):hover {\n  background: #e0e0e0;\n}\n"

/***/ }),

/***/ "./src/app/components/unfinished-reports/unfinished-reports.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/unfinished-reports/unfinished-reports.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>{{\"unfinishedReports.unfinishedReports\"|translate}}</mat-card-title>\n  <mat-card-content>\n    <div *ngIf=\"reports\">\n      <table>\n        <tr>\n          <th>{{\"unfinishedReports.deviceId\"|translate}}</th>\n          <th>{{\"unfinishedReports.model\"|translate}}</th>\n          <th>{{\"unfinishedReports.client\"|translate}}</th>\n          <th>{{\"unfinishedReports.technician\"|translate}}</th>\n          <th>{{\"unfinishedReports.date\"|translate}}</th>\n          <th>{{\"unfinishedReports.load\"|translate}}</th>\n\n        </tr>\n        <tr *ngFor=\"let report of unfinishedReports\">\n          <td>{{report.deviceId}}</td>\n          <td>{{report.deviceModel}}</td>\n          <td>{{report.clientName}}</td>\n          <td>{{report.technician}}</td>\n          <td>{{getDate(report.date)}}</td>\n          <td>\n            <button mat-icon-button\n                    color=\"primary\"\n                    (click)=\"loadReport(report._id)\"\n                    [disabled]=\"alreadyLoaded(report)\">\n              <mat-icon *ngIf=\"!alreadyLoaded(report)\">\n                cloud_download\n              </mat-icon>\n              <mat-icon *ngIf=\"alreadyLoaded(report)\">\n                check_circle\n              </mat-icon>\n            </button>\n          </td>\n        </tr>\n      </table>\n    </div>\n  </mat-card-content>\n  <mat-progress-bar mode=\"indeterminate\" *ngIf=\"waiting\"></mat-progress-bar>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/components/unfinished-reports/unfinished-reports.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/unfinished-reports/unfinished-reports.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UnfinishedReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnfinishedReportsComponent", function() { return UnfinishedReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_search_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/search-page.service */ "./src/app/services/search-page.service.ts");
/* harmony import */ var _models_report__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/report */ "./src/app/models/report.ts");
/* harmony import */ var _services_stk_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/stk.service */ "./src/app/services/stk.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UnfinishedReportsComponent = /** @class */ (function () {
    function UnfinishedReportsComponent(searchPageService, stkService) {
        this.stkService = stkService;
        this.unfinishedReports = new Array();
        this.reports = new Array();
        this.waiting = false;
        this.searchPageService = searchPageService;
    }
    UnfinishedReportsComponent.prototype.getDate = function (date) {
        var day = date.substring(6);
        var month = date.substring(4, 6);
        var year = date.substring(0, 4);
        return day + '.' + month + '.' + year;
    };
    UnfinishedReportsComponent.prototype.loadReport = function (id) {
        var _this = this;
        this.waiting = true;
        this.stkService.loadUnfinishedReport(id).subscribe(function (data) {
            if (data) {
                console.log(data);
                if (!_this.stkService.openDrawer)
                    _this.stkService.openDrawer = true;
                var repo = new _models_report__WEBPACK_IMPORTED_MODULE_2__["Report"]();
                repo.createFromJson(data);
                _this.stkService.reports.push(repo);
                _this.stkService.saveToLocalStorage();
                _this.waiting = false;
            }
        });
    };
    UnfinishedReportsComponent.prototype.alreadyLoaded = function (report) {
        var result = false;
        for (var _i = 0, _a = this.stkService.reports; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i._id) {
                if (i._id == report._id)
                    result = true;
            }
        }
        return result;
    };
    UnfinishedReportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.waiting = true;
        this.searchPageService.getUninishedReports().subscribe(function (data) {
            if (data) {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var report = data_1[_i];
                    var repo = {
                        _id: report._id,
                        deviceId: report.device.id,
                        deviceModel: report.device.model,
                        clientName: report.client.name,
                        technician: report.technician,
                        date: report.date
                    };
                    _this.unfinishedReports.push(repo);
                }
                _this.waiting = false;
            }
            else {
                console.log("Couldn't load devices from server");
                _this.waiting = false;
            }
        });
    };
    UnfinishedReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-unfinished-reports',
            template: __webpack_require__(/*! ./unfinished-reports.component.html */ "./src/app/components/unfinished-reports/unfinished-reports.component.html"),
            styles: [__webpack_require__(/*! ./unfinished-reports.component.css */ "./src/app/components/unfinished-reports/unfinished-reports.component.css")]
        }),
        __metadata("design:paramtypes", [_services_search_page_service__WEBPACK_IMPORTED_MODULE_1__["SearchPageService"],
            _services_stk_service__WEBPACK_IMPORTED_MODULE_3__["StkService"]])
    ], UnfinishedReportsComponent);
    return UnfinishedReportsComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/models/report.ts":
/*!**********************************!*\
  !*** ./src/app/models/report.ts ***!
  \**********************************/
/*! exports provided: Report */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Report", function() { return Report; });
/* harmony import */ var _testProcedure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testProcedure */ "./src/app/models/testProcedure.ts");
/* harmony import */ var _testSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testSection */ "./src/app/models/testSection.ts");


var Report = /** @class */ (function () {
    function Report() {
        this.work = new Array();
        this.spareParts = new Array();
        this.corrections = {
            id: "",
            serial: "",
            model: "",
            year: "",
            location: "",
            department: ""
        };
    }
    Report.prototype.addTool = function (tool) {
        if (!this.tools)
            this.tools = new Array();
        if (this.tools.length < 5)
            this.tools.push(tool);
    };
    Report.prototype.removeTool = function (index) {
        this.tools.splice(index, 1);
    };
    Report.prototype.addTechnician = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        this.technician = user.name;
    };
    Report.prototype.addWork = function (work) {
        this.work.push(work);
    };
    Report.prototype.removeWork = function (index) {
        this.work.splice(index, 1);
    };
    Report.prototype.addSparePart = function (sparePart) {
        if (!this.spareParts)
            this.spareParts = new Array();
        this.spareParts.push(sparePart);
    };
    Report.prototype.removeSparePart = function (index) {
        this.spareParts.splice(index, 1);
    };
    Report.prototype.addTestProcedure = function (testProcedure) {
        this.testProcedure = new _testProcedure__WEBPACK_IMPORTED_MODULE_0__["TestProcedure"]();
        this.testProcedure.model = testProcedure.model;
        this.testProcedure.version = testProcedure.version;
        for (var _i = 0, _a = testProcedure.testSections; _i < _a.length; _i++) {
            var section = _a[_i];
            this.testProcedure.testSections.push(new _testSection__WEBPACK_IMPORTED_MODULE_1__["TestSection"](section));
        }
    };
    Report.prototype.isValid = function () {
        if (!this.state)
            return false;
        if (this.work.length)
            return true;
    };
    Report.prototype.createFromJson = function (json) {
        if (json._id)
            this._id = json._id;
        if (json.tools)
            this.tools = json.tools;
        if (json.client)
            this.client = json.client;
        if (json.device)
            this.device = json.device;
        if (json.technician)
            this.technician = json.technician;
        if (json.state)
            this.state = json.state;
        if (json.date)
            this.date = json.date;
        if (json.serviceKit)
            this.serviceKit = json.serviceKit;
        if (json.comment)
            this.comment = json.comment;
        this.corrections = json.corrections;
        this.addTestProcedure(json.testProcedure);
        for (var _i = 0, _a = json.work; _i < _a.length; _i++) {
            var work = _a[_i];
            this.addWork(work);
        }
        for (var _b = 0, _c = json.spareParts; _b < _c.length; _b++) {
            var sparePart = _c[_b];
            this.addSparePart(sparePart);
        }
    };
    return Report;
}());



/***/ }),

/***/ "./src/app/models/sparePart.ts":
/*!*************************************!*\
  !*** ./src/app/models/sparePart.ts ***!
  \*************************************/
/*! exports provided: SparePart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparePart", function() { return SparePart; });
var SparePart = /** @class */ (function () {
    function SparePart(articleNr, description, serial, supplier, amount, price, chargeable) {
        this.articleNr = articleNr;
        this.description = description;
        this.serial = serial;
        this.supplier = supplier;
        this.amount = amount;
        this.price = price;
        this.chargeable = chargeable;
    }
    return SparePart;
}());



/***/ }),

/***/ "./src/app/models/testPoint.ts":
/*!*************************************!*\
  !*** ./src/app/models/testPoint.ts ***!
  \*************************************/
/*! exports provided: TestPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPoint", function() { return TestPoint; });
var TestPoint = /** @class */ (function () {
    function TestPoint(testPoint) {
        this.nr = testPoint.nr;
        this.dimension = testPoint.dimension;
        this.description_en = testPoint.description_en;
        this.description_de = testPoint.description_de;
        this.minValue = testPoint.minValue;
        this.maxValue = testPoint.maxValue;
        if (testPoint.result)
            this.result = testPoint.result;
        if (testPoint.comment)
            this.comment = testPoint.comment;
    }
    TestPoint.prototype.checkStatus = function () {
        if (this.result == null || !this.result)
            return null;
        if (this.dimension == 'i.O.') {
            return this.result == 'i.O.' || this.result == 'N.V.';
        }
        return this.result >= this.minValue && this.result <= this.maxValue;
    };
    return TestPoint;
}());



/***/ }),

/***/ "./src/app/models/testProcedure.ts":
/*!*****************************************!*\
  !*** ./src/app/models/testProcedure.ts ***!
  \*****************************************/
/*! exports provided: TestProcedure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestProcedure", function() { return TestProcedure; });
var TestProcedure = /** @class */ (function () {
    function TestProcedure() {
        this.testSections = new Array();
    }
    TestProcedure.prototype.validationCheck = function () {
        var result = true;
        for (var _i = 0, _a = this.testSections; _i < _a.length; _i++) {
            var section = _a[_i];
            if (section.validationCheck() == false)
                return false;
            if (section.validationCheck() == null)
                result = null;
        }
        return result;
    };
    return TestProcedure;
}());



/***/ }),

/***/ "./src/app/models/testSection.ts":
/*!***************************************!*\
  !*** ./src/app/models/testSection.ts ***!
  \***************************************/
/*! exports provided: TestSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestSection", function() { return TestSection; });
/* harmony import */ var _testPoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testPoint */ "./src/app/models/testPoint.ts");

var TestSection = /** @class */ (function () {
    function TestSection(testSection) {
        this.testPoints = new Array();
        this.sectionTitle = new _testPoint__WEBPACK_IMPORTED_MODULE_0__["TestPoint"](testSection.sectionTitle);
        for (var _i = 0, _a = testSection.testPoints; _i < _a.length; _i++) {
            var testPoint = _a[_i];
            this.testPoints.push(new _testPoint__WEBPACK_IMPORTED_MODULE_0__["TestPoint"](testPoint));
        }
    }
    TestSection.prototype.validationCheck = function () {
        var result = true;
        for (var _i = 0, _a = this.testPoints; _i < _a.length; _i++) {
            var testPoint = _a[_i];
            if (testPoint.validationCheck() == false) {
                return false;
            }
            if (testPoint.validationCheck() == null) {
                result = null;
            }
        }
        return result;
    };
    return TestSection;
}());



/***/ }),

/***/ "./src/app/models/work.ts":
/*!********************************!*\
  !*** ./src/app/models/work.ts ***!
  \********************************/
/*! exports provided: Work */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Work", function() { return Work; });
var Work = /** @class */ (function () {
    function Work(service, date, technician, workload, travelTime, chargeable) {
        this.service = service;
        this.date = date;
        this.technician = technician;
        this.workload = workload;
        this.travelTime = travelTime;
        this.chargeable = chargeable;
    }
    return Work;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stk_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stk.service */ "./src/app/services/stk.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(httpClient, stkService) {
        this.httpClient = httpClient;
        this.stkService = stkService;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.httpClient.post('http://localhost:3000/users/register', user, { headers: headers });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.httpClient.post('http://localhost:3000/users/authenticate', user, { headers: headers });
    };
    AuthService.prototype.getProfile = function () {
        this.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authToken
        });
        return this.httpClient.get('http://localhost:3000/users/profile', { headers: headers });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.removeItem('id_token');
        localStorage.removeItem('user');
        this.stkService.reports = new Array();
    };
    AuthService.prototype.loggedIn = function () {
        this.loadToken();
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["tokenNotExpired"])(null, this.authToken);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _stk_service__WEBPACK_IMPORTED_MODULE_3__["StkService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/client.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/client.service.ts ***!
  \********************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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



var ClientService = /** @class */ (function () {
    function ClientService(httpClient) {
        this.httpClient = httpClient;
        //client: any;
        this.clients = new Array();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    ClientService.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ClientService.prototype.getClients = function () {
        var token = localStorage.getItem("id_token");
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        //return this.httpClient.get<any>('http://localhost:3000/clients/all', {headers: headers});
        return this.httpClient.get('http://localhost:3000/clients/all', { headers: headers });
    };
    ClientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/services/device.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/device.service.ts ***!
  \********************************************/
/*! exports provided: DeviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceService", function() { return DeviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeviceService = /** @class */ (function () {
    //device: any;
    //devices: Array<Device> = new Array<Device>();
    //public dataSource;
    function DeviceService(httpClient) {
        this.httpClient = httpClient;
    }
    /*
    getDevices(clientId){
      console.log("DeviceService: " +clientId);
      const token = localStorage.getItem("id_token");
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      });
      this.httpClient.get<Array<Device>>('http://localhost:3000/devices/client/'+clientId, {headers: headers}).subscribe(
        data => {
          if(data){
            this.devices = data;
            this.dataSource = new MatTableDataSource(this.devices);
          }
          else {
            console.log("Couldn't load devices from server");
          }
        });
    }
    */
    DeviceService.prototype.getDevices = function (clientId) {
        console.log("DeviceService: " + clientId);
        //this.devices = new Array<Device>();
        //this.dataSource = new MatTableDataSource<Device>();
        var token = localStorage.getItem("id_token");
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.httpClient.get('http://localhost:3000/devices/client/' + clientId, { headers: headers });
    };
    DeviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DeviceService);
    return DeviceService;
}());



/***/ }),

/***/ "./src/app/services/overview.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/overview.service.ts ***!
  \**********************************************/
/*! exports provided: OverviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewService", function() { return OverviewService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OverviewService = /** @class */ (function () {
    function OverviewService(httpClient) {
        this.httpClient = httpClient;
    }
    OverviewService.prototype.getClients = function () {
        if (!this.clients) {
            var token = localStorage.getItem("id_token");
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            });
            return this.httpClient.get('http://localhost:3000/clients/all', { headers: headers });
        }
    };
    OverviewService.prototype.getDevices = function (clientId) {
        var token = localStorage.getItem("id_token");
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.httpClient.get('http://localhost:3000/devices/client/' + clientId, { headers: headers });
    };
    OverviewService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OverviewService);
    return OverviewService;
}());



/***/ }),

/***/ "./src/app/services/search-page.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/search-page.service.ts ***!
  \*************************************************/
/*! exports provided: SearchPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageService", function() { return SearchPageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _device_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./device.service */ "./src/app/services/device.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchPageService = /** @class */ (function () {
    function SearchPageService(deviceService, httpClient) {
        this.deviceService = deviceService;
        this.httpClient = httpClient;
        this.devices = new Array();
        this.activeTab = 0;
    }
    SearchPageService.prototype.selectClient = function (client) {
        this.selectedClient = client;
        this.activeTab = 1;
        return this.deviceService.getDevices(client.id);
    };
    SearchPageService.prototype.resetDevice = function () {
        this.selectedDevice = null;
    };
    SearchPageService.prototype.selectDevice = function (device) {
        this.selectedDevice = device;
        this.activeTab = 2;
    };
    SearchPageService.prototype.getTestProcedure = function (model) {
        console.log("GetTestProcedure: " + model);
        var token = localStorage.getItem("id_token");
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.httpClient.get('http://localhost:3000/testprocedures/model/' + model, { headers: headers });
    };
    SearchPageService.prototype.getUninishedReports = function () {
        var token = localStorage.getItem("id_token");
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.httpClient.get('http://localhost:3000/reports/unfinished', { headers: headers });
    };
    SearchPageService.prototype.getReports = function () {
        console.log("GetNotFinishedReports: ");
        var token = localStorage.getItem("id_token");
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.httpClient.get('http://localhost:3000/reports/all', { headers: headers });
    };
    SearchPageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_device_service__WEBPACK_IMPORTED_MODULE_1__["DeviceService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchPageService);
    return SearchPageService;
}());



/***/ }),

/***/ "./src/app/services/stk.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/stk.service.ts ***!
  \*****************************************/
/*! exports provided: StkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StkService", function() { return StkService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_report__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/report */ "./src/app/models/report.ts");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _device_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./device.service */ "./src/app/services/device.service.ts");
/* harmony import */ var _search_page_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-page.service */ "./src/app/services/search-page.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StkService = /** @class */ (function () {
    function StkService(clientService, deviceService, searchService, httpClient) {
        this.clientService = clientService;
        this.deviceService = deviceService;
        this.searchService = searchService;
        this.httpClient = httpClient;
        this.openDrawer = false;
        this.reports = Array();
    }
    StkService.prototype.selectReport = function (report) {
        this.selectedReport = report;
    };
    StkService.prototype.createReport = function () {
        var _this = this;
        var user = JSON.parse(localStorage.getItem('user'));
        var repo = new _models_report__WEBPACK_IMPORTED_MODULE_1__["Report"]();
        repo.device = this.searchService.selectedDevice;
        repo.client = this.searchService.selectedClient;
        repo.technician = user.name;
        //repo.testProcedure = new TestProcedure();
        this.searchService.getTestProcedure(this.searchService.selectedDevice.model).subscribe(function (data) {
            if (data) {
                repo.addTestProcedure(data);
                _this.saveToLocalStorage();
            }
            else {
                console.log("Couldn't load devices from server");
            }
        });
        this.reports.push(repo);
        if (!this.openDrawer)
            this.openDrawer = true;
    };
    StkService.prototype.removeSelectedReport = function () {
        for (var i = 0; i < this.reports.length; i++) {
            if (this.reports[i] === this.selectedReport) {
                this.reports.splice(i, 1);
                this.selectedReport = null;
            }
        }
        this.saveToLocalStorage();
    };
    StkService.prototype.uploadReport = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        var date = this.getDate();
        this.selectedReport.date = date;
        this.selectedReport.technician = user.name;
        console.log(JSON.stringify(this.selectedReport));
        var token = localStorage.getItem("id_token");
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.httpClient.post('http://localhost:3000/reports/', this.selectedReport, { headers: headers });
    };
    ;
    StkService.prototype.numberOfTools = function () {
        if (!this.selectedReport.tools)
            return 0;
        else
            return this.selectedReport.tools.length;
    };
    StkService.prototype.numberOfSpareParts = function () {
        if (!this.selectedReport.spareParts)
            return 0;
        else
            return this.selectedReport.spareParts.length;
    };
    StkService.prototype.numberOfWork = function () {
        if (!this.selectedReport.work)
            return 0;
        else
            return this.selectedReport.work.length;
    };
    StkService.prototype.loadUnfinishedReport = function (id) {
        var token = localStorage.getItem("id_token");
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.httpClient.get('http://localhost:3000/reports/id/' + id, { headers: headers });
    };
    ;
    StkService.prototype.getDate = function () {
        var today = new Date();
        var day = today.getDate().toString();
        var month = (today.getMonth() + 1).toString();
        var year = today.getFullYear().toString();
        if (today.getDate() < 10) {
            day = "0" + day;
        }
        if (today.getMonth() + 1 < 10) {
            month = "0" + month;
        }
        return year + month + day;
    };
    StkService.prototype.saveToLocalStorage = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        var stringi = JSON.stringify(this.reports);
        localStorage.setItem('reports_' + user.username, stringi);
        this.updateLocalReports();
    };
    StkService.prototype.updateLocalReports = function () {
        if (localStorage.getItem('user')) {
            var user = JSON.parse(localStorage.getItem('user'));
            if (localStorage.getItem('reports_' + user.username)) {
                var reportsArrayJson = JSON.parse(localStorage.getItem('reports_' + user.username));
                var reportsArray = new Array();
                for (var _i = 0, reportsArrayJson_1 = reportsArrayJson; _i < reportsArrayJson_1.length; _i++) {
                    var reportJson = reportsArrayJson_1[_i];
                    var repo = new _models_report__WEBPACK_IMPORTED_MODULE_1__["Report"]();
                    repo.createFromJson(reportJson);
                    console.log(reportJson);
                    reportsArray.push(repo);
                }
                this.reports = reportsArray;
            }
        }
    };
    StkService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"],
            _device_service__WEBPACK_IMPORTED_MODULE_3__["DeviceService"],
            _search_page_service__WEBPACK_IMPORTED_MODULE_4__["SearchPageService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], StkService);
    return StkService;
}());



/***/ }),

/***/ "./src/app/services/tool.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/tool.service.ts ***!
  \******************************************/
/*! exports provided: ToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolService", function() { return ToolService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolService = /** @class */ (function () {
    function ToolService(httpClient) {
        this.httpClient = httpClient;
    }
    ToolService.prototype.getTools = function () {
        var _this = this;
        this.loadUser();
        this.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authToken
        });
        //debugging
        console.log('http://localhost:3000/tools/' + this.user.username);
        this.httpClient.get('http://localhost:3000/tools/' + this.user.username, { headers: headers }).subscribe(function (tools) {
            _this.tools = tools;
        }, function (err) {
            console.log(err);
        });
    };
    ToolService.prototype.addTool = function (tool) {
        this.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authToken
        });
        return this.httpClient.post('http://localhost:3000/tools/add', tool, { headers: headers });
    };
    ToolService.prototype.deleteTool = function (tool) {
        this.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authToken
        });
        return this.httpClient.delete('http://localhost:3000/tools/' + tool._id, { headers: headers });
    };
    ToolService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    ToolService.prototype.loadUser = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
    };
    ToolService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ToolService);
    return ToolService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
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

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        return !(user.name == undefined || user.email == undefined ||
            user.username == undefined || user.email == undefined || user.password == undefined);
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
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
    production: false
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ck/CODE/webstorm/hospitool/angular-src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map