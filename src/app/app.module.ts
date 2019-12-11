import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './shared/components/header/header.component';
import {MaterialModule} from './shared/components/material/material.module';
import {PopularComponent} from './pages/popular/popular.component';
import {ContactsComponent} from './pages/contacts/contacts.component';
import {ContactsService} from './shared/services/contacts.service';
import { AddContactComponent } from './shared/components/add-contact/add-contact.component';

import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PopularComponent,
    ContactsComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [
    ContactsService
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddContactComponent]
})
export class AppModule { }
