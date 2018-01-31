import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
//import { IProduct } from './product';


let name =[];

@Injectable()
export class ProductService {
   private _producturl='/userdata';
   constructor(private _http: Http){}
   
   getproducts(): Observable<name[]> {
      return this._http.get(this._producturl)
      .map((response: Response) => <name[]> response.json())
      .do(data => console.log(JSON.stringify(data)));
   }
}


