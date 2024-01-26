import { Component, inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { iAuthRequest } from 'src/app/core/interfaces/auth';
import { AuthService } from 'src/app/core/services/auth.service';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) {}

  headerService = inject(HeaderService);
  form: any;
  ngOnInit(): void {
    this.headerService.titulo = 'Login';
    localStorage.removeItem('session');
  }

  authData: iAuthRequest = {
    userName: '',
    password: '',
  };

  async login(form: NgForm) {
    console.log(form.value);
    const token = await this.auth.login(form.value);
    if (token) this.router.navigate(['/contact']); //si el token existe, redirige a la ruta /contact
  }
}
