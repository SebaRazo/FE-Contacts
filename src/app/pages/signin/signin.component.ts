import { Component, inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { iRegisterRequest } from 'src/app/core/interfaces/auth';
import { AuthService } from 'src/app/core/services/auth.service';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) {}

  user: iRegisterRequest = {
    name: '',
    lastName: '',
    password: '',
    email: '',
    userName: '',
  };

  async register(registerForm: NgForm) {
    console.log(registerForm.value);
    const res = await this.auth.addUser(registerForm.value);
    if (res) {
      this.router.navigate(['/login']);
      return;
    }
    throw new Error('Method not implemented.');
  }
  headerService = inject(HeaderService);
  ngOnInit(): void {
    this.headerService.titulo = 'SignIn';
  }
}
