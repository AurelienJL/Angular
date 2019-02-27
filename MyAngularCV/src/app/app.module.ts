import { CvContentService } from './cv-content/cv-content.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { FormationComponent } from './formation/formation.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { CvContentComponent } from './cv-content/cv-content.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SkillsComponent,
    FormationComponent,
    ProjectsComponent,
    ContactComponent,
    CvContentComponent,
    FooterComponent,
    MenuComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [CvContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
