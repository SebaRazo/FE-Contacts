import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditContactRoutingModule } from './edit-contact-routing.module';
import { EditContactComponent } from './edit-contact.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditContactComponent],
  imports: [CommonModule, EditContactRoutingModule, FormsModule],
})
export class EditContactModule {}
