import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ObservationsComponent } from './observations/observations.component';
import { GeneralPageComponent } from './general-page/general-page.component';
import { ObservationComponent } from './observation/observation.component';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';

const routes: Routes = [
  {path: '',component: ObservationsComponent},
  {path: 'observations',component: ObservationsComponent},
  {path: 'generalPage',component: GeneralPageComponent},
  {path: 'observation',component: ObservationComponent},
  {path: 'hamburgerMenu', component: HamburgerMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
