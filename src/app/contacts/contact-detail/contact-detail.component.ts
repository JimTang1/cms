import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
    private contactService: ContactService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params 
    .subscribe((params: Params) =>{
      this.id = params['id'];
      this.contact= this.contactService.getContactId(this.id);
    })
  }

  onEditContact(){
    this.router.navigate(['Edit'],{relativeTo: this.route});
  }

}
