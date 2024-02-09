import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ObservationsComponent } from './observations/observations.component';
import { TableRowComponent } from './table-row/table-row.component';
import { GeneralPageComponent } from './general-page/general-page.component';
import { ObservationComponent } from './observation/observation.component';
import { ChartComponent } from './chart/chart.component';
import { NgChartsModule } from 'ng2-charts';
import { DataBoxComponent } from './data-box/data-box.component';
import { StaticBoxComponent } from './static-box/static-box.component';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';
import { MobileTableRowComponent } from './mobile-table-row/mobile-table-row.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ObservationsComponent,
    TableRowComponent,
    GeneralPageComponent,
    ObservationComponent,
    ChartComponent,
    DataBoxComponent,
    StaticBoxComponent,
    HamburgerMenuComponent,
    MobileTableRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
