import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './components';
import { ShoppingListItemComponent } from './components/';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
