import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEditContactRoutingModule } from './add-edit-contact-routing.module';
import { FormsModule } from '@angular/forms';
import { AddEditContactComponent } from './add-edit-contact.component';

@NgModule({
  declarations: [AddEditContactComponent],
  imports: [CommonModule, AddEditContactRoutingModule, FormsModule],
})
export class AddEditContactModule {}
