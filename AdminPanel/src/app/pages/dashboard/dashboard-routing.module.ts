import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'website-logo',
        loadChildren: () => import('../website-logo/website-logo.module').then(m => m.WebsiteLogoModule)
      },
      {
        path: 'website-title',
        loadChildren: () => import('../website-title/website-title.module').then(m => m.WebsiteTitleModule)
      },
      {
        path: 'social-links',
        loadChildren: () => import('../social-links/social-links.module').then(m => m.SocialLinksModule)
      },
      { path: 'privacy-policy', loadChildren: () => import('../privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule) },
      { path: 'terms', loadChildren: () => import('../terms/terms.module').then(m => m.TermsModule) },
      { path: 'about', loadChildren: () => import('../about/about.module').then(m => m.AboutModule) },
      {
        path: '',
        redirectTo: '/website-logo',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/website-logo',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
