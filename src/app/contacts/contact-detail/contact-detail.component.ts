import { Component, Input, OnInit } from '@angular/core';
import { Contacts} from '../contacts.model';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  @Input() contact: Contacts;
  
  constructor() { }

  ngOnInit(): void {
  }

}
