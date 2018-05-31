import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { PageComponent } from './page/page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {ChartModule, LogarithmicService} from '@syncfusion/ej2-ng-charts';
import { CategoryService, LegendService, TooltipService } from '@syncfusion/ej2-ng-charts';
import { DataLabelService, LineSeriesService} from '@syncfusion/ej2-ng-charts';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [
    CategoryService,
    LegendService,
    TooltipService,
    DataLabelService,
    LineSeriesService,
    LogarithmicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
