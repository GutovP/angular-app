import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MenusSharedRoutingModule } from './menus-shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent],
  imports: [
    CommonModule,
    MenusSharedRoutingModule,
    NgbModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    FooterComponent,
    NgbModule
  ],
  /* schemas: [CUSTOM_ELEMENTS_SCHEMA] */
})
export class MenusSharedModule { }
