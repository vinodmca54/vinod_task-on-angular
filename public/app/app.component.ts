import { Component, Input, EventEmitter, Output, OnInit} from "@angular/core";
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Http , Response } from '@angular/http';
import { ProductService } from './app.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { appService } from './injection/service';

@Component({
  selector: 'app-root',
  //moduleId: module.id,
  templateUrl: `./app/app.component.html`,
  providers: [ProductService]
})
export class AppComponent {

  constructor(public _http: Http, public _appService: appService){}
  

   response: string[];  
   ngOnInit(): void { 
      this.response = this._appService.getData(); 
      console.log(this.response.company);
   }  
 
}
  
  