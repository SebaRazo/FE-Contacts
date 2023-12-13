import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditContactComponent } from '../add-edit-contact/add-edit-contact.component';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
  },
  /*{
    path: 'add-edit-contact',
    component: AddEditContactComponent,
  },
  {
    path: 'edit-contact',
    component: AddEditContactComponent,
  },*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutingModule {}
