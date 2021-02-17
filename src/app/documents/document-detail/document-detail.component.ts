import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Document} from '../document.model';
import { DocumentService } from '../document.service';
@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {
  document:Document;
  id:string;

  constructor(private route: ActivatedRoute,
    private documentService: DocumentService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params
    .subscribe((params: Params) =>{
      this.id = params['id'];
      this.document = this.documentService.getDocumentId(this.id);
    })
  }

  onEditDocument(){
    this.router.navigate(['Edit'], {relativeTo: this.route});
    //this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

}
