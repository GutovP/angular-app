import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenusSharedModule } from 'src/app/menus/menus-shared.module';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    MenusSharedModule
  ],

})
export class ContactModule { }
