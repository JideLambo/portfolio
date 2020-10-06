import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Component } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { RecentWorkComponent } from "./components/recent-work/recent-work.component";
import { FooterSocialComponent } from "./components/footer-social/footer-social.component";
import { AboutComponent } from "./pages/about/about.component";
import { HomeBriefsComponent } from "./components/home-briefs/home-briefs.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { WorksHeroComponent } from "./components/works-hero/works-hero.component";
import { WorkGigmComponent } from "./pages/work-gigm/work-gigm.component";
import { DesignProcessComponent } from "./pages/design-process/design-process.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { WorkCouponcoolerComponent } from "./pages/work-couponcooler/work-couponcooler.component";
import { WorkBcasterComponent } from "./pages/work-bcaster/work-bcaster.component";
import { PlaygroundComponent } from "./pages/playground/playground.component";

const appRoutes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "about", component: AboutComponent },
  { path: "playground", component: PlaygroundComponent },
  { path: "GIGM", component: WorkGigmComponent },
  { path: "design-process", component: DesignProcessComponent },
  { path: "couponcooler", component: WorkCouponcoolerComponent },
  { path: "bcaster-dashboard", component: WorkBcasterComponent },
  { path: "not-found", component: PageNotFoundComponent },
  { path: "**", redirectTo: "not-found" },
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
    DesignProcessComponent,
    PageNotFoundComponent,
    WorkCouponcoolerComponent,
    WorkBcasterComponent,
    PlaygroundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
