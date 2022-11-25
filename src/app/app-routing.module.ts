import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { XpComponent } from './xp/xp.component';

const routes: Routes = [
  {
    path: '',redirectTo:'home',pathMatch:'full'
  },
  {
    path: 'home',component:HomeComponent
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
    path: 'privacy',component:PrivacyComponent
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
