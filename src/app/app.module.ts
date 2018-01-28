import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AppModule } from 'ng-ui-charts';
// import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { FlexSpikeComponent } from './flex-spike/flex-spike.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RxSpikeComponent } from './rx-spike/rx-spike.component';


@NgModule({
  declarations: [
    AppComponent,
    FlexSpikeComponent,
    PageNotFoundComponent,
    RxSpikeComponent,
  ],
  imports: [
    BrowserModule,
    // Ng2GoogleChartsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
