import { CommunicationService } from './../shared/services/communication.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceorderService } from './services/serviceorder.service';
import { ServiceOrderListTableComponentMapperService } from './services/service-order-list-table-component-mapper.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { DialogServiceService } from '../shared/services/dialog-service.service';
import { ServiceorderCreateComponent } from './create/serviceorder.create.component';
import { PdfBuilderService } from './services/pdf-builder.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-serviceorder',
  templateUrl: './serviceorder.component.html',
  styleUrls: ['./serviceorder.component.css']
})
export class ServiceorderComponent implements OnInit {

  headerForTables =['id','data-servico','cliente','quantidade','status','opcoes']
  constructor(
    public serviceOrderService:ServiceorderService,
    public mapper:ServiceOrderListTableComponentMapperService,
    public dialogService:DialogServiceService,
    public pdfBuilder:PdfBuilderService,
    private communicationService:CommunicationService,
    private router:Router
    ) { }



  ngOnInit(): void {



  }

  editObject(object:any){

    let serviceOrder = this.serviceOrderService.list.find(o => o.id === object.id);
    console.log(serviceOrder);
    this.router.navigate(["ordem-servico","pdf"]).then(() =>{

      setTimeout(() => {
        this.communicationService.sendData(serviceOrder);
      },10)

    })

    //this.pdfBuilder.buildServiceOrderPdf(object);
  }

  openAddNew(){
    this.dialogService.openDialog(ServiceorderCreateComponent,null,"/ordem-servico")
  }

}


