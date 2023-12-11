import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ContactJsonPlaceholder,
  Contacto,
} from 'src/app/core/interfaces/contacto';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-contact-card',
  standalone: true,
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent implements OnInit {
  contactsData: ContactJsonPlaceholder[] = [];
  constructor() {}

  @Input() contact: ContactJsonPlaceholder = {
    id: 0,
    name: '',
    telephoneNumber: 0,
    celularNumber: 0,
    description: '',
  };
  ngOnInit(): void {}
}
