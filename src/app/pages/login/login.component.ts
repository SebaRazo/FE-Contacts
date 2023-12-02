import { Component, inject, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  headerService = inject(HeaderService);
  ngOnInit(): void {
    this.headerService.titulo = 'Login';
  }
}
