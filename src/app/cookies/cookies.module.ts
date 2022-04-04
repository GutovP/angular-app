import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

import { CookiesComponent } from './cookies.component';

@NgModule({
  declarations: [CookiesComponent],
  imports: [CommonModule],
  exports: [CookiesComponent],
  bootstrap: [CookiesComponent],
  providers: [CookieService],
})
export class CookiesModule {}
