import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveForm3Component } from './reactive-form-3.component';

describe('ReactiveForm3Component', () => {
  let component: ReactiveForm3Component;
  let fixture: ComponentFixture<ReactiveForm3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveForm3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveForm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
