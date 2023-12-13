import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { AddEditContactComponent } from './add-edit-contact.component';

const routes: Routes = [
  {
    path: '',
    component: AddEditContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditContactRoutingModule {}
