import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Profilev1Component } from './profilev1/profilev1.component';
import { Profilev2Component } from './profilev2/profilev2.component';
import { TechsComponent } from './techs/techs.component';
import { TypewriterComponent } from './typewriter/typewriter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Profilev1Component,
    Profilev2Component,
    TechsComponent,
    TypewriterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
