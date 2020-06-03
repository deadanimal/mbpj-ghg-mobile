import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CoreLayoutComponent } from './layouts/core-layout/core-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/start',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'core',
    component: CoreLayoutComponent,
    children: [
      {
        path: 'applications',
        loadChildren: () => import('./core/applications/applications.module').then( m => m.ApplicationsPageModule)
      },
      {
        path: 'application/walkthrough',
        loadChildren: () => import('./core/application-walkthrough/application-walkthrough.module').then( m => m.ApplicationWalkthroughPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./core/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'my-home',
        loadChildren: () => import('./core/my-home/my-home.module').then( m => m.MyHomePageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./core/notifications/notifications.module').then( m => m.NotificationsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./core/profile/profile.module').then( m => m.ProfilePageModule)
      },
    ]
  },
  {
    path: 'about',
    loadChildren: () => import('./core/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'application/apply',
    loadChildren: () => import('./core/application-apply/application-apply.module').then( m => m.ApplicationApplyPageModule)
  },
  {
    path: 'application/detail/:id',
    loadChildren: () => import('./core/application-detail/application-detail.module').then( m => m.ApplicationDetailPageModule)
  },
  {
    path: 'my-home/add',
    loadChildren: () => import('./core/my-home-add/my-home-add.module').then( m => m.MyHomeAddPageModule)
  },
  {
    path: 'my-home/detail',
    loadChildren: () => import('./core/my-home-detail/my-home-detail.module').then( m => m.MyHomeDetailPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./core/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'helpdesk',
    loadChildren: () => import('./core/helpdesk/helpdesk.module').then( m => m.HelpdeskPageModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./core/information/information.module').then( m => m.InformationPageModule)
  },
  {
    path: 'auth/login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'auth/register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'auth/forgot',
    loadChildren: () => import('./auth/forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'auth/walkthrough',
    loadChildren: () => import('./pages/walkthrough/walkthrough.module').then( m => m.WalkthroughPageModule)
  },
  {
    path: 'auth/start',
    loadChildren: () => import('./pages/start/start.module').then( m => m.StartPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
