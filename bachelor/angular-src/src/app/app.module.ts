import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatTabsModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatSelectModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MAT_DATE_LOCALE,
  MatDialogModule,
  MatBadgeModule,
  MatStepperModule,
  MatTooltipModule
} from "@angular/material";
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './components/login/login.component';
import {RouterModule, Routes} from "@angular/router";
import { ProfileComponent } from './components/profile/profile.component';
import {FormsModule} from "@angular/forms";
import {ValidateService} from "./services/validate.service";
import {FlashMessagesModule} from "angular2-flash-messages";
import {AuthService} from "./services/auth.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AuthGuard} from "./guards/auth.guard";
import { SearchByClientComponent } from './components/search-by-client/search-by-client.component';
import { ClientTableComponent } from './components/search-by-client/client-table/client-table.component';
import { StkComponent } from './components/stk/stk.component';
import { OverviewComponent } from './components/overview/overview.component';
import {ClientService} from "./services/client.service";
import {SearchPageService} from "./services/search-page.service";
import { DeviceTableComponent } from './components/search-by-client/device-table/device-table.component';
import {DeviceService} from "./services/device.service";
import {ToolsComponent} from "./components/stk/tools/tools.component";
import {MatChipsModule} from '@angular/material/chips';
import { SparePartsComponent } from './components/stk/spare-parts/spare-parts.component';
import { WorkComponent } from './components/stk/work/work.component';
import { InfosComponent } from './components/stk/infos/infos.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { UnfinishedReportsComponent } from './components/unfinished-reports/unfinished-reports.component';
import {StkService} from "./services/stk.service";
import { WorkEditDialogComponent } from './components/stk/work/work-edit-dialog/work-edit-dialog.component';
import { SparepartsEditDialogComponent } from './components/stk/spare-parts/spareparts-edit-dialog/spareparts-edit-dialog.component';
import { PreviewComponent } from './components/stk/preview/preview.component';
import { PreviewReportDialogComponent } from './components/stk/preview/preview-report-dialog/preview-report-dialog.component';
import { ConclusionComponent } from './components/stk/conclusion/conclusion.component';
import { TestProcedureComponent } from './components/stk/test-procedure/test-procedure.component';
import {CdkTableModule} from "@angular/cdk/table";

const appRoutes: Routes =[
  {path:'login', component: LoginComponent},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'searchByClient', component: SearchByClientComponent, canActivate:[AuthGuard]},
  {path:'stk', component: StkComponent, canActivate:[AuthGuard]},
  {path:'overview', component: OverviewComponent, canActivate:[AuthGuard]},
  {path:'unfinishedReports', component: UnfinishedReportsComponent, canActivate:[AuthGuard]},
  {path:'**', component: ProfileComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LoginComponent,
    ProfileComponent,
    SearchByClientComponent,
    ClientTableComponent,
    StkComponent,
    OverviewComponent,
    DeviceTableComponent,
    ToolsComponent,
    SparePartsComponent,
    WorkComponent,
    InfosComponent,
    UnfinishedReportsComponent,
    WorkEditDialogComponent,
    SparepartsEditDialogComponent,
    PreviewComponent,
    PreviewReportDialogComponent,
    ConclusionComponent,
    TestProcedureComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatGridListModule,
    MatExpansionModule,
    MatChipsModule,
    MatDialogModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatStepperModule,
    MatTooltipModule,
    MatBadgeModule,
    CdkTableModule,
    MatNativeDateModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
],
  entryComponents: [WorkEditDialogComponent, SparepartsEditDialogComponent, PreviewReportDialogComponent],
  providers: [ValidateService,
    FlashMessagesModule,
    AuthService,
    ClientService,
    SearchPageService,
    DeviceService,
    AuthGuard,
    StkService,
    {provide: MAT_DATE_LOCALE, useValue: 'de-DE'}],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
