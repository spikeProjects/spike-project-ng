import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FlexSpikeComponent } from './flex-spike/flex-spike.component';
import { RxSpikeComponent } from './rx-spike/rx-spike.component';
import { LibsSpikeComponent } from './libs-spike/libs-spike.component';
import { DecoratorsComponent } from './decorators/decorators.component';
import { TemplatesComponent } from './templates/templates.component';

import { TuiComponent } from './tui/tui.component';
import { EcoChartsComponent } from './eco-charts/eco-charts.component';
import { IocComponent } from './ioc/ioc.component';
import { QuillComponent } from './quill/quill.component';
import { Base64Component } from './base64/base64.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'flex-spike',
    component: FlexSpikeComponent,
  },
  {
    path: 'rx-spike',
    component: RxSpikeComponent,
  },
  {
    path: 'libs-spike',
    component: LibsSpikeComponent,
  },
  {
    path: 'decorators-spike',
    component: DecoratorsComponent,
  },
  {
    path: 'templates',
    component: TemplatesComponent,
  },
  {
    path: 'tui',
    component: TuiComponent,
  },
  {
    path: 'eco-charts',
    component: EcoChartsComponent,
  },
  {
    path: 'IocComponent',
    component: IocComponent,
  },
  {
    path: 'quill',
    component: QuillComponent,
  },
  {
    path: 'base64',
    component: Base64Component,
  },
  { path: '', redirectTo: '/tdc', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    CommonModule,
  RouterModule.forRoot(
    appRoutes,
    // { enableTracing: true }
  )
  ],
  // declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
