import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../../constants/backend';
import { ContactJsonPlaceholder, Contacto } from '../interfaces/contacto';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ContactoService {
  constructor(private auth: AuthService) {}
  async getContactDetails(id: number): Promise<Contacto> {
    const res = await fetch(BACKEND_URL + '/api/Contact/' + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth.getSession().token!}`,
      },
    });
    const contact = await res.json();
    console.log('Contact in getContactDetails:', contact);
    return contact;
  }

  async getContacts(): Promise<ContactJsonPlaceholder[]> {
    const data = await fetch(BACKEND_URL + '/api/Contact/all', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth.getSession().token!}`,
      },
    });
    return await data.json();
  }

  async getBlockedContacts(): Promise<Contacto[]> {
    const data = await fetch(BACKEND_URL + '/api/Contact/blocked', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth.getSession().token!}`,
      },
    });

    return await data.json();
  }

  async editContact(id: number, contact: Partial<Contacto>): Promise<boolean> {
    console.log('Contact in editContact:', contact);
    const res = await fetch(BACKEND_URL + '/api/Contact/' + id, {
      method: 'PUT',
      body: JSON.stringify(contact),
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth.getSession().token!}`,
      },
    });
    if (!res.ok) return false;
    return true;
  }

  async addContact(
    contact: ContactJsonPlaceholder
  ): Promise<ContactJsonPlaceholder> {
    console.log(contact);
    const res = await fetch(BACKEND_URL + '/api/Contact', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth.getSession().token!}`,
      },
      body: JSON.stringify(contact),
    });
    return await res.json();
  }

  async deleteContact(id: number): Promise<boolean> {
    const res = await fetch(BACKEND_URL + '/api/Contact/' + id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth.getSession().token!}`,
      },
    });
    return res.ok;
  }

  async blockContact(id: number): Promise<boolean> {
    const res = await fetch(BACKEND_URL + '/api/Contact/block/' + id, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth.getSession().token!}`,
      },
    });
    return res.ok;
  }

  async unblockContact(id: number): Promise<boolean> {
    const res = await fetch(BACKEND_URL + '/api/Contact/unblock/' + id, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth.getSession().token!}`,
      },
    });
    return res.ok;
  }
}
