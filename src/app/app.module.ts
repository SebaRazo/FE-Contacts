import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddEditContactComponent } from './pages/add-edit-contact/add-edit-contact.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { BlockedCardComponent } from './components/blocked-card/blocked-card.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlockedContactComponent } from './pages/blocked-contact/blocked-contact.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    ContactDetailsComponent,
    BlockedCardComponent,
    BlockedContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
