import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contacts} from '../contacts.model';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: Contacts;
  id:string;
  
  constructor( private route:ActivatedRoute,
    private contactService: ContactService) { }

  ngOnInit(): void {
    this.route.params 
    .subscribe((params: Params) =>{
      this.id = params['id'];
      this.contact= this.contactService.getContactId(this.id);
    })
  }

}
