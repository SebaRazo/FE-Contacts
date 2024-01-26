import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../../constants/backend';
import { iAuthRequest } from '../interfaces/auth';
import { ISession } from '../interfaces/session.interface';
import { IUser } from '../interfaces/user.interface';
import { JwtHelperService } from '@auth0/angular-jwt'; //npm install @auth0/angular-jwt
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
    this.loggedIn = !!localStorage.getItem('session'); //para que quede la sesión guardada
  }

  async login(authentication: iAuthRequest): Promise<boolean> {
    const res = await fetch('https://localhost:7229/api/User/authenticate', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(authentication),
    });
    if (!res.ok) return false;
    const token = await res.text();
    console.log(token);

    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    const sub = decodedToken.sub;
    console.log(sub);

    if (!token) return false;
    this.setSession(token);
    this.setUserId(sub); //guarda el id en el local storage
    return true;
  }

  /*async login(authentication: iAuthRequest): Promise<boolean> {
    const res = await fetch(
      'https://localhost:7229/api/Authentication/authenticate',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(authentication),
      }
    );
    if (!res.ok) return false;
    const token = await res.text();
    console.log(token);
    if (!token) return false;
    this.setSession(token);
    return true;
  }
  */
  async addUser(user: IUser): Promise<boolean> {
    const res = await fetch(BACKEND_URL + '/api/User', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(user),
    }).then();
    //console.log(res);
    if (!res.ok) return false;

    return true;
  }

  setUserId(id: string) {
    localStorage.setItem('Id', id);
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  getSession(): ISession {
    const item: string = localStorage.getItem('session') || 'invalid';
    if (item !== 'invalid') {
      return JSON.parse(item);
    }
    return { expiresIn: '', token: '' };
  }

  setSession(token: any, expiresTimeHours: number = 24) {
    const date = new Date();
    date.setHours(date.getHours() + expiresTimeHours);

    const session: ISession = {
      expiresIn: new Date(date).toISOString(),
      token,
    };
    this.loggedIn = true;
    localStorage.setItem('session', JSON.stringify(session));
    //window.location.reload();
  }

  async getMe() {
    const res = await fetch('', {
      headers: {
        Authorization: this.getSession().token!,
      },
    });
    return await res.json();
  }

  resetSession() {
    localStorage.removeItem('session');
    this.loggedIn = false;
    window.location.reload();
  }
  //new
  getUserId(): number | null {
    const storedUserId = localStorage.getItem('Id');
    return storedUserId ? +storedUserId : null;
  }
}
