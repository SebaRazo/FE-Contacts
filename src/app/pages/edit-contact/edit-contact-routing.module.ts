import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditContactComponent } from '../add-edit-contact/add-edit-contact.component';
import { ContactComponent } from '../contact/contact.component';
import { LoginComponent } from '../login/login.component';
import { EditContactComponent } from './edit-contact.component';

const routes: Routes = [
  {
    path: 'edit-contact',
    component: EditContactComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'add-edit-contact',
    component: AddEditContactComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditContactRoutingModule {}
