import { Component, OnInit } from '@angular/core';
import { IContact, ContactsService } from '../../shared/services/contacts.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  contacts: IContact[];

  constructor(
    private contactsService: ContactsService
  ) {}

  ngOnInit() {
    this.contacts = this.contactsService.getPopularContacts();
  }

}
