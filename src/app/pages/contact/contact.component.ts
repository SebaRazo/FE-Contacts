import { Component, inject, OnInit } from '@angular/core';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contacto';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactsData: ContactJsonPlaceholder[] = [];

  constructor() //private cs: ContactService,
  //private router: Router,
  //private auth: AuthService
  {}
  /*ngOnInit(): void {
    this.getData();
  }

  async getData() {
    this.contactsData = await this.cs.getContacts();
  }

  logOut() {
    this.auth.resetSession();
  }

  async deleteContacto(id: number): Promise<void> {
    await this.cs.deleteContact(id);
  }

  reload() {
    this.getData();
  }*/

  headerService = inject(HeaderService);
  ngOnInit(): void {
    this.headerService.titulo = 'Contactos';
  }
}
