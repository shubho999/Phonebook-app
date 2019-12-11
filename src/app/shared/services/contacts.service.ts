import { Injectable } from '@angular/core';

export interface IContact {
  name: string;
  number: string;
  popular: boolean;
}

@Injectable()
export class ContactsService {

  private readonly contacts: IContact[] = [
    { name: 'Shubham', number: '9451322456', popular: true },
    { name: 'Ripu', number: '7745690222', popular: false },
    { name: 'Shagun', number: '8896897958', popular: true },
    { name: 'Mridu', number: '9922314490', popular: false }
  ];

  getContacts(): IContact[] {
    return this.contacts;
  }

  getPopularContacts(): IContact[] {
    return this.contacts.filter((contact: IContact) => {
      return (contact.popular === true);
    });
  }

}
