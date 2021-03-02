import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contacts } from '../contacts.model';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  contact:Contacts;
  originalContact: Contacts;
  groupContacts: Contacts[] = [];
  editMode: boolean = false;
  id: string;

  constructor(private route:ActivatedRoute,
    private router: Router,
    private contactServic: ContactService) { }

  ngOnInit(): void {
    this.route.params
    .subscribe((params: Params)=>{
      this.id = params['id'];
      if(this.id == null || this.id ==undefined){
        this.editMode = false;
        return;
      }
      this.originalContact = this.contactServic.getContact(this.id);
      if(this.originalContact == null || this.originalContact == undefined){
        return;
      }

      this.editMode = true;
      this.contact = JSON.parse(JSON.stringify(this.originalContact));
      if(this.contact.group){
        this.groupContacts = JSON.parse(JSON.stringify(this.groupContacts));
      }
    })
  }

  onCancel(){
    this.router.navigate(['..'], {relativeTo:this.route});
  }

  onRemoveItem(){

  }

  onSubmit(form:NgForm){
    const value = form.value;
    if(this.editMode === true){
      this.contactServic.updateContact(this.originalContact, value);
    }else{
      this.contactServic.addContact(value);
    }
    this.router.navigate(['..'], {relativeTo:this.route});
  }
}
