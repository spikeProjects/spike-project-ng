import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AppModule } from 'ng-ui-charts';
// import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { FlexSpikeComponent } from './flex-spike/flex-spike.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RxSpikeComponent } from './rx-spike/rx-spike.component';
import { LibsSpikeComponent } from './libs-spike/libs-spike.component';
import { CoComponent } from './libs-spike/co/co.component';
import { FormSpikeComponent } from './form-spike/form-spike.component';
import { TemplateDrivenFormComponent } from './form-spike/template-driven-form/template-driven-form.component';
import { DecoratorsComponent } from './decorators/decorators.component';


@NgModule({
  declarations: [
    AppComponent,
    FlexSpikeComponent,
    PageNotFoundComponent,
    RxSpikeComponent,
    LibsSpikeComponent,
    CoComponent,
    FormSpikeComponent,
    TemplateDrivenFormComponent,
    DecoratorsComponent,
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
