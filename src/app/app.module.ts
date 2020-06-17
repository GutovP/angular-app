import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenusSharedModule } from './menus/menus-shared.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ServiceModule } from './services/service.module';




@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule,
    MenusSharedModule,
    ServiceModule/*.forRoot()<-uncomment if you use the static method in service.module*/,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
