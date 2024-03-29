import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoggedUserGuard } from './core/guards/logged-user.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signin',
    loadChildren: () =>
      import('./pages/signin/signin.module').then((m) => m.SigninModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactModule),
    canActivate: [LoggedUserGuard],
  },
  {
    path: 'add-edit-contact',
    loadChildren: () =>
      import('./pages/add-edit-contact/add-edit-contact.module').then(
        (m) => m.AddEditContactModule
      ),
    canActivate: [LoggedUserGuard],
  },
  {
    path: 'edit-contact',
    loadChildren: () =>
      import('./pages/edit-contact/edit-contact.module').then(
        (m) => m.EditContactModule
      ),
    canActivate: [LoggedUserGuard],
  },
  {
    path: 'blocked-contact',
    loadChildren: () =>
      import('./pages/blocked-contact/blocked-contact.module').then(
        (m) => m.BlockedContactModule
      ),
    canActivate: [LoggedUserGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
