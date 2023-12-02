import { Component, inject, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  headerService = inject(HeaderService);
  ngOnInit(): void {
    this.headerService.titulo = 'SignIn';
  }
}
