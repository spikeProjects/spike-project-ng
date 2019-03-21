import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FederationComponent } from './federation.component';

import { MainComponent } from './main/main.component';
import { ModalComponent } from './modal/modal.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '',
    component: FederationComponent,
    children: [
      {
        path: 'main',
        component: MainComponent
      },
      {
        path: 'modal',
        component: ModalComponent
      },
      {
        path: 'form',
        component: FormComponent
      },
      {
        path: '',
        redirectTo: '/federation/main',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FederationRoutingModule { }
