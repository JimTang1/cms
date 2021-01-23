import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contacts} from '../contacts.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  @Output() selectedContactEvent = new EventEmitter<Contacts>();
  contacts: Contacts[] = [
    new Contacts(
    "1",
    "R. Kent Jackson", 
    "jacksonk@byui.edu",
    "208-496-3771", 
    'https://web.byui.edu/Directory/Employee/jacksonk.jpg',
    null),

    new Contacts(
    '2',
    'Rex Barzee',
    'barzeer@byui.edu',
    '208-496-3768',
    'https://web.byui.edu/Directory/Employee/barzeer.jpg',
    null)
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onSelected(contact: Contacts){
    this.selectedContactEvent.emit(contact);
  }
}
