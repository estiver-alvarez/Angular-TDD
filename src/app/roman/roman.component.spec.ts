import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { RomanNumbersService } from './arabic2numbers.service';
import { RomanComponent } from './roman.component';


describe('RomanComponent ', () => {
  let component: RomanComponent ;
  let fixture: ComponentFixture<RomanComponent >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RomanComponent  ]
    })
    .compileComponents();
 

  TestBed.configureTestingModule({
    declarations: [RomanComponent]
  })
    .createComponent(RomanComponent);
  }));
  // beforeEach(() => {
  //   fixture = TestBed.createComponent(RomanComponent );
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(RomanComponent).toBeTruthy();
  });

  it('1 >>  I', async(() => {

    const service: RomanNumbersService = TestBed.inject(RomanNumbersService);
    (<HTMLInputElement>document.getElementById('num1')).value = '1';
    (<HTMLInputElement>document.getElementById('result')).value = service.arabic2Roman(1)
    document.getElementById('calc1').click();
    expect((<HTMLInputElement>document.getElementById('result')).value).toBe('I');
    
  }));

  it('2 >>  II', () => {
    const service: RomanNumbersService = TestBed.inject(RomanNumbersService);
    (<HTMLInputElement>document.getElementById('num1')).value = '2';
    (<HTMLInputElement>document.getElementById('result')).value = service.arabic2Roman(2)
    document.getElementById('calc1').click();
    expect((<HTMLInputElement>document.getElementById('result')).value).toBe('II');
  });

  it('3 >>  III', () => {
    const service: RomanNumbersService = TestBed.inject(RomanNumbersService);
    (<HTMLInputElement>document.getElementById('num1')).value = '3';
    (<HTMLInputElement>document.getElementById('result')).value = service.arabic2Roman(3)
    document.getElementById('calc1').click();
    expect((<HTMLInputElement>document.getElementById('result')).value).toBe('III');
  });

  it('4 >>  IV', () => {
    const service: RomanNumbersService = TestBed.inject(RomanNumbersService);
    (<HTMLInputElement>document.getElementById('num1')).value = '4';
    (<HTMLInputElement>document.getElementById('result')).value = service.arabic2Roman(4)
    document.getElementById('calc1').click();
    expect((<HTMLInputElement>document.getElementById('result')).value).toBe('IV');

  });
  it('5 >>  V', () => {
    const service: RomanNumbersService = TestBed.inject(RomanNumbersService);
    (<HTMLInputElement>document.getElementById('num1')).value = '5';
    (<HTMLInputElement>document.getElementById('result')).value = service.arabic2Roman(5)
    document.getElementById('calc1').click();
    expect((<HTMLInputElement>document.getElementById('result')).value).toBe('V');
  });
  it('6 >>  VI', () => {
    const service: RomanNumbersService = TestBed.inject(RomanNumbersService);
    (<HTMLInputElement>document.getElementById('num1')).value = '6';
    (<HTMLInputElement>document.getElementById('result')).value = service.arabic2Roman(6)
    document.getElementById('calc1').click();
    expect((<HTMLInputElement>document.getElementById('result')).value).toBe('VI');
  });
  it('8 >>  VIII', () => {
    
    const service: RomanNumbersService = TestBed.inject(RomanNumbersService);
    (<HTMLInputElement>document.getElementById('num1')).value = '8';
    (<HTMLInputElement>document.getElementById('result')).value = service.arabic2Roman(8)
    document.getElementById('calc1').click();
    expect((<HTMLInputElement>document.getElementById('result')).value).toBe('VIII');
  });
  it('10 >>  X', () => {
    const service: RomanNumbersService = TestBed.inject(RomanNumbersService);
    (<HTMLInputElement>document.getElementById('num1')).value = '10';
    (<HTMLInputElement>document.getElementById('result')).value = service.arabic2Roman(10)
    document.getElementById('calc1').click();
    expect((<HTMLInputElement>document.getElementById('result')).value).toBe('X');
  });
  it('20 >>  XX', () => {
    const service: RomanNumbersService = TestBed.inject(RomanNumbersService);
    (<HTMLInputElement>document.getElementById('num1')).value = '20';
    (<HTMLInputElement>document.getElementById('result')).value = service.arabic2Roman(20)
    document.getElementById('calc1').click();
    expect((<HTMLInputElement>document.getElementById('result')).value).toBe('XX');
  });
  it('35 >>  XXXV', () => {
    const service: RomanNumbersService = TestBed.inject(RomanNumbersService);
    (<HTMLInputElement>document.getElementById('num1')).value = '35';
    (<HTMLInputElement>document.getElementById('result')).value = service.arabic2Roman(35)
    document.getElementById('calc1').click();
    expect((<HTMLInputElement>document.getElementById('result')).value).toBe('XXXV');

  });
  it('46 >>  XLVI', () => {
    const service: RomanNumbersService = TestBed.inject(RomanNumbersService);
    (<HTMLInputElement>document.getElementById('num1')).value = '46';
    (<HTMLInputElement>document.getElementById('result')).value = service.arabic2Roman(46)
    document.getElementById('calc1').click();
    expect((<HTMLInputElement>document.getElementById('result')).value).toBe('XLVI');
  });
  it('80 >>  LXXX', () => {
    const service: RomanNumbersService = TestBed.inject(RomanNumbersService);
    (<HTMLInputElement>document.getElementById('num1')).value = '80';
    (<HTMLInputElement>document.getElementById('result')).value = service.arabic2Roman(80)
    document.getElementById('calc1').click();
    expect((<HTMLInputElement>document.getElementById('result')).value).toBe('LXXX');
  
  });
  it('240 >>  CCXL', () => {
    const service: RomanNumbersService = TestBed.inject(RomanNumbersService);
    (<HTMLInputElement>document.getElementById('num1')).value = '240';
    (<HTMLInputElement>document.getElementById('result')).value = service.arabic2Roman(240)
    document.getElementById('calc1').click();
    expect((<HTMLInputElement>document.getElementById('result')).value).toBe('CCXL');
 
  });
  it('539 >>  DXXXIX', () => {
    const service: RomanNumbersService = TestBed.inject(RomanNumbersService);
    (<HTMLInputElement>document.getElementById('num1')).value = '539';
    (<HTMLInputElement>document.getElementById('result')).value = service.arabic2Roman(539)
    document.getElementById('calc1').click();
    expect((<HTMLInputElement>document.getElementById('result')).value).toBe('DXXXIX');

  });
  it('783 >>  DCCLXXXIII', () => {
    const service: RomanNumbersService = TestBed.inject(RomanNumbersService);
    (<HTMLInputElement>document.getElementById('num1')).value = '783';
    (<HTMLInputElement>document.getElementById('result')).value = service.arabic2Roman(783)
    document.getElementById('calc1').click();
    expect((<HTMLInputElement>document.getElementById('result')).value).toBe('DCCLXXXIII');
    expect(service.arabic2Roman(783)).toEqual('DCCLXXXIII');
  });
  it('997 >>  CMXCVII', () => {
    const service: RomanNumbersService = TestBed.inject(RomanNumbersService);
    (<HTMLInputElement>document.getElementById('num1')).value = '997';
    (<HTMLInputElement>document.getElementById('result')).value = service.arabic2Roman(997)
    document.getElementById('calc1').click();
    expect((<HTMLInputElement>document.getElementById('result')).value).toBe('CMXCVII');
  });
  it('1000 >>  M', () => {
    const service: RomanNumbersService = TestBed.inject(RomanNumbersService);
    (<HTMLInputElement>document.getElementById('num1')).value = '1000';
    (<HTMLInputElement>document.getElementById('result')).value = service.arabic2Roman(1000)
    document.getElementById('calc1').click();
    expect((<HTMLInputElement>document.getElementById('result')).value).toBe('M');
  });

  
});