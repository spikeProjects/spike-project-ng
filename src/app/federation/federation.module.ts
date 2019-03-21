import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FederationComponent } from './federation.component';

import { TuiMessageService  } from 'tdc-ui';
import { TuiModule, FormModule } from 'tdc-ui';

import { FederationRoutingModule } from './federation-routing.module';
import { MainComponent } from './main/main.component';
import { ModalComponent } from './modal/modal.component';
import { FormComponent } from './form/form.component';

import { BasicModalComponent } from './basic-modal/basic-modal.component';
import { LargeModalComponent } from './large-modal/large-modal.component';

import {ClipboardModule} from 'ngx-clipboard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TuiModule,
    FormModule,
    FederationRoutingModule,
    ClipboardModule
  ],
  declarations: [
    FederationComponent,
    MainComponent,
    ModalComponent,
    FormComponent,
    BasicModalComponent,
    LargeModalComponent
  ],
  providers: [
    TuiMessageService
  ],
  entryComponents: [
    BasicModalComponent,
    LargeModalComponent
  ]
})
export class FederationModule { }
