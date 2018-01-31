import { Component, Input, EventEmitter, Output, OnInit} from "@angular/core";
import { Router }  from '@angular/router'; 
import { Http , Response } from '@angular/http'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { appService } from './injection/service';  
import { Hero } from './app.hero';  

@Component({
  selector: 'app-root',
  templateUrl: `./app/app.login.html`,
})
export class LoginComponent {
 err : boolean = false;
 constructor(private _router: Router, private _http: Http, private _appService: appService){} 
 
   value : string ='';
    


   submit(): void { 

      this._http.get('/login/'+this.uName+'/'+this.pass)
            .map(response => response.json())
            .subscribe(result => {
                this.result =result;
                if(this.result[0]){
                    this._appService.setData(this.result);
                    this._router.navigate(['/crisis-center']);
                    this.err = false;
                }else{
                    this.err = true;
                }
            });  
   }

}
  