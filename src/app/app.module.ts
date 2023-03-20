import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TechsComponent } from './techs/techs.component';
import { TypewriterComponent } from './typewriter/typewriter.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ThreedeComponent } from './threede/threede.component';
import { SimplifyComponent } from './simplify/simplify.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TechsComponent,
    TypewriterComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    HeaderComponent,
    MenuComponent,
    ThreedeComponent,
    SimplifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
