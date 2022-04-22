import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement} from '@angular/core';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let debug:DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports:[RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    debug=fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have header equal to Shopping App',()=>{
    const fixture = TestBed.createComponent(HeaderComponent);
    const headComponent = fixture.nativeElement;
    fixture.detectChanges();
    expect(headComponent.querySelector('h1').textContent).toContain('Shopping App');
  })

  it('should have anchor tag equal to product',()=>{
    const fixture = TestBed.createComponent(HeaderComponent);
    const headComponent = fixture.nativeElement;
    fixture.detectChanges();
    expect(headComponent.querySelectorAll('a')[0].textContent).toContain('Products');
  }) 

   it('should have anchor tag equal to MyCart',()=>{
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const headComponent = fixture.nativeElement;
    expect(headComponent.querySelectorAll('a')[1].textContent).toContain('MyCart');
  })  


})



