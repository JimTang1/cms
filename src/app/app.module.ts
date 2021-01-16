import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactPersonComponent } from './contacts/contact-list/contact-person/contact-person.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HeaderComponent,
    ContactDetailComponent,
    ContactListComponent,
    ContactPersonComponent,
    DocumentsComponent,
    DocumentEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
