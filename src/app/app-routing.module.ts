import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FlexSpikeComponent } from './flex-spike/flex-spike.component';
import { RxSpikeComponent } from './rx-spike/rx-spike.component';
import { LibsSpikeComponent } from './libs-spike/libs-spike.component';

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
	{ path: '', redirectTo: '/tdc', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    CommonModule,
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: true }
		)
  ],
  // declarations: [],
  exports: [
	  RouterModule
  ]
})
export class AppRoutingModule { }
