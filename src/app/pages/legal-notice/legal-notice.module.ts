import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalNoticeRoutingModule } from './legal-notice-routing.module';
import { LegalNoticeComponent } from './legal-notice.component';
import { MenusSharedModule } from 'src/app/menus/menus-shared.module';


@NgModule({
  declarations: [LegalNoticeComponent],
  imports: [
    CommonModule,
    LegalNoticeRoutingModule,
    MenusSharedModule,
  ]
})
export class LegalNoticeModule { }
