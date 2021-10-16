import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanNumbersService {

  constructor() { }

  public arabic2Roman(arabic: number) {
    let arabicNumber = '';
    const principalNumbers = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

    if (arabic >= 1000) {
      for (let i = arabic; i >= 1000; i = i - 1000) {
        arabicNumber = arabicNumber.concat('M');
        arabic = arabic - 1000;
      }
    }
    if (arabic >= 900) {
      arabicNumber = arabicNumber.concat('CM');
      arabic = arabic - 900;
    }
    if (arabic >= 500) {
      arabicNumber = arabicNumber.concat('D');
      arabic = arabic - 500;
    }
    if (arabic >= 400) {
      arabicNumber = arabicNumber.concat('CD');
      arabic = arabic - 400;
    }
    if (arabic >= 100) {
      for (let i = arabic; i >= 100; i = i - 100) {
        arabicNumber = arabicNumber.concat('C');
        arabic = arabic - 100;
      }
    }
    if (arabic >= 90) {
      arabicNumber = arabicNumber.concat('XC');
      arabic = arabic - 90;
    }
    if (arabic >= 50) {
      arabicNumber = arabicNumber.concat('L');
      arabic = arabic - 50;
    }
    if (arabic >= 40) {
      arabicNumber = arabicNumber.concat('XL');
      arabic = arabic - 40;
    }
    if (arabic >= 10) {
      for (let i = arabic; i >= 10; i = i - 10) {
        arabicNumber = arabicNumber.concat('X');
        arabic = arabic - 10;
      }
    }
    if (arabic < 10) {
      arabicNumber = arabicNumber.concat(principalNumbers[arabic]);
      arabic = arabic - arabic;
    }
    return arabicNumber;
  }
}