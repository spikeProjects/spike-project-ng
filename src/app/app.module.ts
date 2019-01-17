import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { TemplatesComponent } from './templates/templates.component';
import { BannerDirective } from './templates/banner.directive';
import { BannerComponent } from './templates/banner/banner.component';
import { WrapperComponent } from './templates/wrapper/wrapper.component';
import { CounterComponent } from './templates/counter/counter.component';
import { TuiComponent } from './tui/tui.component';
import { TuiModule } from 'tdc-ui';

import { PopupComponent } from '@rockwang/migrant';
import { EcoChartsComponent } from './eco-charts/eco-charts.component';

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
    TemplatesComponent,
    BannerDirective,
    BannerComponent,
    WrapperComponent,
    CounterComponent,
    TuiComponent,
    PopupComponent,
    EcoChartsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // Ng2GoogleChartsModule,
    AppRoutingModule,
    TuiModule
  ],
  entryComponents: [
    BannerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
