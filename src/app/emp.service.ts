import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmpService {
  employees=[];
  constructor(private _http:Http) { }
  checkMe:any;
  getEmployees(){
    return this._http.get("http://localhost/api/select.php/")
      .map(res=>{
        this.checkMe = res;
       
        if(this.checkMe._body !== "0"){
           return res.json()
        }
       
      });
  }
  checkPalindrome(string){
    return this._http.post("http://upscaleinfotech.com/checkpalindrome.php",{'string':string})
      .map(res=>res.json());
  }
}
