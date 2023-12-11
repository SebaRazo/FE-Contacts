import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { FormsModule } from '@angular/forms';
import { ContactCardComponent } from '../../components/contact-card/contact-card.component';
import { EditContactComponent } from '../edit-contact/edit-contact.component';
import { PopUpComponent } from '../../components/pop-up/pop-up.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    ContactCardComponent,
    PopUpComponent,
  ],
})
export class ContactModule {}
