import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { SecondModule } from './second/second.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { ShoppingListState } from './shopping-list/shopping-list.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ShoppingListModule,
    SecondModule,
    NgxsModule.forRoot([ShoppingListState], {
      developmentMode: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
