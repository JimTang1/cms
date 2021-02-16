import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
    private documentService: DocumentService) { }

  ngOnInit(): void {
    this.route.params
    .subscribe((params: Params) =>{
      this.id = params['id'];
      this.document = this.documentService.getDocumentId(this.id);
    })
  }

}
