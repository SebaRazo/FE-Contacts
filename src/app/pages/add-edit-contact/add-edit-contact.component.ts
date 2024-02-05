import { Component, inject, OnInit, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contacto';
import { ContactoService } from 'src/app/core/services/contacto.service';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-add-edit-contact',
  templateUrl: './add-edit-contact.component.html',
  styleUrls: ['./add-edit-contact.component.scss'],
})
export class AddEditContactComponent implements OnInit {
  constructor(
    private headerService: HeaderService,
    private cs: ContactoService,
    private router: Router,
    private ar: ActivatedRoute
  ) {}

  contactsData: ContactJsonPlaceholder = {
    name: '',
    celularNumber: 0,
    description: '',
    telephoneNumber: 0,
    call: [],
    isBlocked: false,
  };
  async AgregContactos(createForm: NgForm) {
    console.log(createForm.value);
    const res = await this.cs.addContact(createForm.value);
    console.log(res);
    this.router.navigate(['/contact']);
  }

  ngOnInit(): void {
    this.headerService.titulo = 'Add';
  }
}
