import { Injectable, inject } from '@angular/core';
import { DialogServiceService } from './dialog-service.service';

@Injectable({
  providedIn: 'root'
})
export abstract class ErrorsHelperService {

  dialogService:DialogServiceService = inject(DialogServiceService);
  constructor() { }

  public abstract checkErrors(...vargs:any[]):void;
}
