import { NgModule } from '@angular/core';
import {DxButtonModule, DxCheckBoxModule, DxFormModule, DxNumberBoxModule, DxSelectBoxModule} from 'devextreme-angular';

const MODULES = [
  DxButtonModule,
  DxFormModule,
  DxSelectBoxModule,
  DxNumberBoxModule,
  DxCheckBoxModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class DevexModule { }
