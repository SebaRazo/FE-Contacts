import { Component, Input, OnInit } from '@angular/core';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contacto';

@Component({
  selector: 'app-blocked-card',
  templateUrl: './blocked-card.component.html',
  styleUrls: ['./blocked-card.component.scss'],
})
export class BlockedCardComponent implements OnInit {
  contactsData: ContactJsonPlaceholder[] = [];
  @Input() contact: ContactJsonPlaceholder = {
    id: 0,
    name: '',
    celularNumber: 0,
    description: '',
    telephoneNumber: 0,
  };

  ngOnInit(): void {}
}
