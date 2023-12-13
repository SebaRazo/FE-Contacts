import { Component, inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contacto';
import { ContactoService } from 'src/app/core/services/contacto.service';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
})
export class EditContactComponent implements OnInit {
  id: number | undefined;
  headerService = inject(HeaderService);
  constructor(
    private contactoService: ContactoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.headerService.titulo = 'Editar';
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.contactoService
        .getContactDetails(this.id)
        .then((r) => (this.contact = r));
    });
  }
  contact: ContactJsonPlaceholder = {
    id: 0,
    name: '',
    celularNumber: undefined,
    description: '',
    telephoneNumber: undefined,
  };
  async updateContact(editForm: NgForm): Promise<void> {
    if (editForm.errors !== null) return;
    if (this.id === undefined) return;
    const res = await this.contactoService.editContact(this.id, editForm.value);
    this.router.navigate(['/contact']);
  }
}
