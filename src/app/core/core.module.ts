import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { AccountModule } from './account/account.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    AccountModule
  ]
})
export class CoreModule { }
