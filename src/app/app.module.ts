import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { XpComponent } from './xp/xp.component';
import { ContactComponent } from './contact/contact.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar'; @NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    FooterComponent,
    HomeComponent,
    SkillsComponent,
    XpComponent,
    ContactComponent,
    PortfolioComponent,
    NavbarComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    NgxTypedJsModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [

  ]
})
export class AppModule { }
