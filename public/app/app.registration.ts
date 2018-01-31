import { Component, Input, EventEmitter, Output, OnInit} from "@angular/core";
import { Router }  from '@angular/router'; 
import { Http , Response } from '@angular/http'; 
@Component({
  templateUrl: `./app/app.registration.html`,
})
export class RegistrationComponent {
   constructor(private _router: Router, private _http: Http){}  
   fName : string = '';
   lName : string = '';
   email : string = '';
   company : string ='';
   ph : number;
   pwd : string ='';
   userName : string = '';
   obj = {};
   submit():void {
        this.obj ={ 
            fname : this.fName,
            lname : this.lName,
            email : this.email,
            company : this.company,
            phone : this.ph,
            userName : this.userName,
            pwd : this.pwd
            
        }
        this._http.post('/register/data', this.obj)
        .subscribe(data => {
        this.data = data;
        console.log(this.data);
         this._router.navigate(['/login']); 
        }, error =>{
        this.errorMessage = <any>error
       });    
    }
}                                         