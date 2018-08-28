import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavMainComponent } from './menus/nav-main.component';
import { NavSecondaryComponent } from './menus/nav-secondary.component';
import { HomeComponent } from './pages/home/home.component';
import { AcupunctureHomeComponent } from './pages/acupuncture-home/acupuncture-home.component';
import { AboutComponent } from './pages/about/about.component';
import { AcupunctureHistoryComponent } from './pages/acupuncture-history/acupuncture-history.component';
import { AcupunctureMeridiansComponent } from './pages/acupuncture-meridians/acupuncture-meridians.component';
import { AcupuncturePointsComponent } from './pages/acupuncture-points/acupuncture-points.component';
import { AcupunctureNeedlesComponent } from './pages/acupuncture-needles/acupuncture-needles.component';
import { AcupunctureFaqComponent } from './pages/acupuncture-faq/acupuncture-faq.component';
import { TaichiHomeComponent } from './pages/taichi-home/taichi-home.component';
import { TaichiHistoryComponent } from './pages/taichi-history/taichi-history.component';
import { TaichiStructureComponent } from './pages/taichi-structure/taichi-structure.component';

const routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'acupuncture/home', component: AcupunctureHomeComponent },
  { path: 'acupuncture/history', component: AcupunctureHistoryComponent },
  { path: 'acupuncture/meridians', component: AcupunctureMeridiansComponent },
  { path: 'acupuncture/points', component: AcupuncturePointsComponent },
  { path: 'acupuncture/needles', component: AcupunctureNeedlesComponent },
  { path: 'acupuncture/faq', component: AcupunctureFaqComponent },
  { path: 'taichi/home', component: TaichiHomeComponent },
  { path: 'taichi/history', component: TaichiHistoryComponent },
  { path: 'taichi/structure', component: TaichiStructureComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavMainComponent,
    NavSecondaryComponent,
    HomeComponent,
    AcupunctureHomeComponent,
    AboutComponent,
    AcupunctureHistoryComponent,
    AcupunctureMeridiansComponent,
    AcupuncturePointsComponent,
    AcupunctureNeedlesComponent,
    AcupunctureFaqComponent,
    TaichiHomeComponent,
    TaichiHistoryComponent,
    TaichiStructureComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
