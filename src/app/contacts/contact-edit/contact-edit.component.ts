import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contacts } from '../contacts.model';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  contact:Contacts;

  constructor(private route:ActivatedRoute,
    private router: Router,
    private contactServic: ContactService) { }

  ngOnInit(): void {

  }

  onCancel(){
    this.router.navigate(['..'], {relativeTo:this.route});
  }

  onRemoveItem(){

  }

  onSubmit(form:NgForm){
    this.router.navigate(['..'], {relativeTo:this.route});
  }
}
