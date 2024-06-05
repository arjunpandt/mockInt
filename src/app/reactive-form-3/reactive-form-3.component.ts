import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TestServiceService } from '../Services/test-service.service';
import { filter, of } from 'rxjs';
import { DemoPipePipe } from '../demo-pipe.pipe';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-reactive-form-3',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,DemoPipePipe,NgFor],
  templateUrl: './reactive-form-3.component.html',
  styleUrl: './reactive-form-3.component.css'
})
export class ReactiveForm3Component implements OnInit {
  myObservable = of(1,2,3,4);
  filteredData = this.myObservable.pipe(filter(value=> value%2===0))

  constructor(private logService:TestServiceService){

  }

  ngOnInit(): void {
    this.filteredData.subscribe(result=>{
      console.log(result);
      
    })
  }

  myForm = new FormGroup({
    name: new FormControl('FORM 3')
  });
  ngName="Arjun"

  submitReactiveForm = ()=>{
    console.log(this.myForm.value['name']);
    this.logService.logData();
  }

  submitForm(formData:NgForm){
    console.log(formData.value);
    
  }

}
