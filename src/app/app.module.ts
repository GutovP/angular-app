import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenusSharedModule } from './menus/menus-shared.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ServiceModule } from './services/service.module';
import { PokemonsModule } from './pages/pokemons/pokemons.module';
import { CookiesModule } from './cookies/cookies.module';
import { FilterTextModule } from './filter-text/filter-text.module';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenusSharedModule,
    ServiceModule /*.forRoot()<-uncomment if you use the static method in service.module*/,
    PokemonsModule,
    CookiesModule,
    FilterTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
