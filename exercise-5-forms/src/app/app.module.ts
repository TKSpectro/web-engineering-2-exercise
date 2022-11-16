import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormReactiveModule } from './contact-form-reactive/contact-form-reactive.module';
import { ContactFormModule } from './contact-form/contact-form.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactFormModule,
    ContactFormReactiveModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
