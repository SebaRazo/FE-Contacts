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
        Authorization: `Bearer ${this.auth.getSession().token!}`, ////******************* */
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
  async editContact(id: number, contact: Partial<Contacto>): Promise<Contacto> {
    console.log('Contact in editContact:', contact);
    const res = await fetch(BACKEND_URL + '/api/Contact/' + id, {
      method: 'PUT',
      body: JSON.stringify(contact),
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth.getSession().token!}`,
      },
    });
    return await res.json();
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
  //ver
  async blockContact(id: number): Promise<void> {
    const res = await fetch(BACKEND_URL + '/api/Contact/block/' + id, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth.getSession().token!}`,
      },
    });
    if (!res.ok) {
    }
  }
}

/*
  async getContactDetails(id: number): Promise<Contacto | undefined> {
    let contactos = await this.getContactos();
    return contactos.find((contacto) => contacto.id === id);
  }

  async getContactos(): Promise<Contacto[]> {
    const contactosFalsos: Contacto[] = [
      { id: 1, name: 'John Doe', celularNumber: 123456789 },
      { id: 2, name: 'Jane Smith', celularNumber: 987654321 },
    ];

    let contactos: Contacto[] = [];
    let contactosString = localStorage.getItem('contactos');

    if (contactosString) {
      // Utilizamos try-catch para manejar posibles errores al parsear JSON
      try {
        const contactosLocalStorage = JSON.parse(contactosString);
        //contactos = JSON.parse(contactosString);
        contactos = [...contactosFalsos, ...contactosLocalStorage];
      } catch (error) {
        contactos = contactosFalsos; //console.error('Error al parsear JSON:', error);
      }
    }

    return contactos;
 */
