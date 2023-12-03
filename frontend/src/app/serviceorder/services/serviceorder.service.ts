import { Injectable } from '@angular/core';
import { ServiceOrder } from 'src/app/shared/entities/ServiceOrder';
import { CrudBaseService } from 'src/app/shared/services/crudbase.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceorderService extends CrudBaseService<ServiceOrder> {

  constructor() {
    super();
  }
}