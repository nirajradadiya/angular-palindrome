import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { EmpService } from '../../emp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private empService: EmpService
   ) { }
  
  ngOnInit() {
   
  }
  public palindrome;
  public palindromeText;
  public prime;
  public primeText;
  public fibonacci;
  public fibonacciText;
  checkPalindrome() {
    this.palindrome = '';
    var str = this.palindromeText.trim();
    if(str){
      this.empService
      .checkPalindrome(str)
      .subscribe(employee =>{
        if(employee == 1){
          this.palindrome = str+" - is a palindrome";
        }else{
          this.palindrome = str+" - is not a palindrome";
        }
      })
    }    
  }

  checkPrime() {
    this.prime = '';
    var input = this.primeText;
    if(input){
      let prime = input+" - is prime number";;
      for (let i = 2; i <= Math.sqrt(input); i++) {
          if (input % i == 0) {
              prime = input+" - is not a prime number";
              break;
          }
      }
      this.prime = prime;
    }    
  }

  generateFibonacci() {
    let x;
    var numMax = this.fibonacciText;
    this.fibonacci = '';
    if(numMax){
      for(var fibArray = [0,1], i=0,j=1,k=0; k<numMax;i=j,j=x,k++ ){
        x=i+j;
        fibArray.push(x);
      }
      this.fibonacci = fibArray;
    }
  }
}
