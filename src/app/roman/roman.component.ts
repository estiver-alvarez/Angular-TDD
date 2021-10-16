//   bootstrap: [AppComponent]
// })
import { Component ,OnInit,ViewChild } from '@angular/core';
import { RomanNumbersService } from './arabic2numbers.service';

@Component({
  selector: 'app-login',
  templateUrl: './roman.component.html',
  styleUrls: ['./roman.component.scss']
})

export class RomanComponent implements OnInit { 
  constructor(private romanS: RomanNumbersService) { }

  @ViewChild('result') result: any;
  title = "angular-tdd";


  public ngOnInit(): void {

  }

  public calc(num: any){
    
    return this.romanS.arabic2Roman(num);
  }
  public print_result(num:any){

    this.result.nativeElement.value =  this.calc(num);

  }

}
