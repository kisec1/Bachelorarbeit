import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {Language} from "../../app.component";
import {StkService} from "../../services/stk.service";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  language: Language[] = [
    {value: 'de', viewValue: 'Deutsch'},
    {value: 'en', viewValue: 'English'}
  ];

  openDrawer: boolean = false;
  selectedLanguage: string = this.language[0].value;
  stkService: StkService;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver,
              private authService: AuthService,
              private router: Router,
              private translate: TranslateService,
              stkService: StkService) {
    this.stkService = stkService;
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login'])
  }

  useLanguage(language: string) {
    this.translate.use(language);
    this.selectedLanguage = language;
  }

  isLoggedIn(){
    return this.authService.loggedIn();
  }
}
