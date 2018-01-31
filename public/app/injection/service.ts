
import { Injectable } from '@angular/core'; 
export class appService {  
   name: string = ''; 
   setData(data: string): void { 
      this.name = data;
   }
   getData(): string {   
     return  this.name;
   } 
}