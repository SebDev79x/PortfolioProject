import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { XpComponent } from './xp/xp.component';

const routes: Routes = [
  {
    path: '',redirectTo:'home',pathMatch:'full'
  },
  {
    path: 'home',component:HomeComponent
  },
  {
    path: 'skills',component:SkillsComponent
  },
  {
    path: 'xp',component:XpComponent
  },
  {
    path: 'portfolio',component:PortfolioComponent
  },
  {
    path: 'contact',component:ContactComponent
  },
  {
    path: '**',component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
