import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private messageService: MessageService) { }

  addSuccessMessage(content:string){
    this.messageService.add({ severity: 'info', summary: 'Info', detail: content });
  }

  addWarnMessage(content:string){
    this.messageService.add({ severity: 'error', summary: 'Warn', detail: content });
  }

}
