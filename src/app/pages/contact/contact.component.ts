import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contacto';
import { AuthService } from 'src/app/core/services/auth.service';
import { ContactoService } from 'src/app/core/services/contacto.service';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactsData: ContactJsonPlaceholder[] = [];

  constructor(
    private router: Router,
    private auth: AuthService,
    private cs: ContactoService
  ) {}

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
  }

  headerService = inject(HeaderService);
  ngOnInit(): void {
    this.headerService.titulo = 'Contactos';
    this.getData();
  }
}
