import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-form-demo',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form-demo.component.html',
  styleUrl: './reactive-form-demo.component.css'
})
export class ReactiveFormDemoComponent{
  @Input() testDat:any;

  myform = new FormGroup({
    name: new FormControl('Arjun',Validators.required),
    moNumber: new FormControl('', Validators.minLength(10)),
    address: new FormControl('',[Validators.minLength(10),Validators.maxLength(100)])
  })

  submitForm = ()=>{
    console.log(this.myform);
    
  }

}
