import { Component, inject, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  register() {
    throw new Error('Method not implemented.');
  }
  headerService = inject(HeaderService);
  user: any;
  form: any;
  ngOnInit(): void {
    this.headerService.titulo = 'SignIn';
  }
}
