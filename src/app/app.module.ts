import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactPersonComponent } from './contacts/contact-person/contact-person.component';
import { DocumentsComponent } from './documents/documents.component';
import { MessageEditComponent } from './messages/message-edit/message-edit.component';
import { MessageItemComponent } from './messages/message-item/message-item.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { DocumentItemComponent } from './documents/document-item/document-item.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import { DocumentListComponent } from './documents/document-list/document-list.component';
import {DropdownDirective} from './header/dropdown.directive';
import { CmsService } from './cms.service';
import { MessageService } from './messages/message.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HeaderComponent,
    ContactDetailComponent,
    ContactListComponent,
    ContactPersonComponent,
    DocumentsComponent,
    MessageEditComponent,
    MessageItemComponent,
    MessageListComponent,
    DocumentItemComponent,
    DocumentDetailComponent,
    DocumentListComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
