import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contacto';
import { Router } from '@angular/router';
import { ContactoService } from 'src/app/core/services/contacto.service';

@Component({
  selector: 'app-pop-up',
  standalone: true,
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {
  @Output() getData: EventEmitter<any> = new EventEmitter();

  //agregar metodos
  constructor(
    private router: Router,
    private contactoService: ContactoService
  ) {}

  @Input() contacto: ContactJsonPlaceholder = {
    id: 0,
    name: '',
    celularNumber: 0,
    description: '',
    telephoneNumber: 0,
    call: [],
  };

  ngOnInit(): void {}

  blockContact() {}

  async deleteContacto(contactoId: any) {
    const res = await this.contactoService.deleteContact(contactoId);
    if (res) this.getData.emit();
  }

  navigateToEditContact(contactoId?: number) {
    this.router.navigate(['/edit-contact', { id: contactoId }]);
  }
}
