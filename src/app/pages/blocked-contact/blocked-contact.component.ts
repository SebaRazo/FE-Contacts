import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contacto';
import { AuthService } from 'src/app/core/services/auth.service';
import { ContactoService } from 'src/app/core/services/contacto.service';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-blocked-contact',
  templateUrl: './blocked-contact.component.html',
  styleUrls: ['./blocked-contact.component.scss'],
})
export class BlockedContactComponent implements OnInit {
  headerService = inject(HeaderService);
  contactsData: ContactJsonPlaceholder[] = [];

  constructor(
    private cs: ContactoService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.headerService.titulo = 'BlackList';
    this.getData();
  }

  async getData() {
    this.contactsData = await this.cs.getBlockedContacts();
    console.log(this.contactsData);
  }

  logOut() {
    this.auth.resetSession();
  }
  reload() {
    this.getData();
  }
}
