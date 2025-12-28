import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TechsComponent } from './techs/techs.component';
import { TypewriterComponent } from './typewriter/typewriter.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ThreedeComponent } from './threede/threede.component';
import { SimplifyComponent } from './simplify/simplify.component';
import { ProfileComponent } from './profile/profile.component';
import { AwardsComponent } from './awards/awards.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Simplify2Component } from './simplify2/simplify2.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { LibraryComponent } from './library/library.component';
import { StoreComponent } from './store/store.component';
import { ConnectComponent } from './connect/connect.component';
import { BookComponent } from './book/book.component';
import { ImpulseComponent } from './impulse/impulse.component';
import { ImpulseCardComponent } from './impulse-card/impulse-card.component';
import { GameComponent } from './game/game.component';
import { ReposComponent } from './repos/repos.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionCardComponent } from './shared/section-card/section-card.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        TechsComponent,
        TypewriterComponent,
        AboutComponent,
        SkillsComponent,
        ExperienceComponent,
        HeaderComponent,
        ThreedeComponent,
        SimplifyComponent,
        ProfileComponent,
        AwardsComponent,
        CarouselComponent,
        Simplify2Component,
        ProjectsComponent,
        ResumeComponent,
        LibraryComponent,
        StoreComponent,
        ConnectComponent,
        BookComponent,
        ImpulseComponent,
        ImpulseCardComponent,
        GameComponent,
        ReposComponent,
        SidebarComponent,
        SectionCardComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        MenuComponent], providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class AppModule { }
