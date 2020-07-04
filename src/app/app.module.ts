import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecentWorkComponent } from './components/recent-work/recent-work.component';
import { FooterSocialComponent } from './components/footer-social/footer-social.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeBriefsComponent } from './components/home-briefs/home-briefs.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { WorksHeroComponent } from './components/works-hero/works-hero.component';
import { WorkGigmComponent } from './pages/work-gigm/work-gigm.component';
import { WorkGtpayComponent } from './pages/work-gtpay/work-gtpay.component';
import { WorkShareitComponent } from './pages/work-shareit/work-shareit.component';
import { DesignProcessComponent } from './pages/design-process/design-process.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WorkCouponcoolerComponent } from './pages/work-couponcooler/work-couponcooler.component';
import { WorkMicrofinanceComponent } from './pages/work-microfinance/work-microfinance.component';
import { WorkBcasterComponent } from './pages/work-bcaster/work-bcaster.component';


const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'GIGM', component: WorkGigmComponent },
  { path: 'gtpay', component: WorkGtpayComponent },
  { path: 'shareit', component: WorkShareitComponent },
  { path: 'design-process', component: DesignProcessComponent },
  { path: 'couponcooler', component: WorkCouponcoolerComponent },
  { path: 'microfinance', component: WorkMicrofinanceComponent },
  { path: 'bcaster-dashboard', component: WorkBcasterComponent },
  { path: 'not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecentWorkComponent,
    FooterSocialComponent,
    AboutComponent,
    HomeBriefsComponent,
    HomePageComponent,
    WorksHeroComponent,
    WorkGigmComponent,
    WorkGtpayComponent,
    WorkShareitComponent,
    DesignProcessComponent,
    PageNotFoundComponent,
    WorkCouponcoolerComponent,
    WorkMicrofinanceComponent,
    WorkBcasterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
