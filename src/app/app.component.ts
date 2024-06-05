import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import test from './test.service';
import { NewTaskComponent } from './new-task/new-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveForm2Component } from './reactive-form-2/reactive-form-2.component';
import { ReactiveForm3Component } from './reactive-form-3/reactive-form-3.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,ReactiveFormDemoComponent, RouterOutlet,ReactiveFormsModule,NewTaskComponent,ShowTaskComponent,ReactiveFormComponent,ReactiveForm2Component,ReactiveForm3Component,ParentCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  title = 'mockInt';
  dataArr=[
    {'name':'arjun',
      'number':1234567890,
    },
    {'name':'pandit',
      'number':1234567430,
    },
    {'name':'paras',
      'number':1234564390,
    },
  ]
  myform = new FormGroup({
    name: new FormControl()
  })
  test = new test;
  
  ngOnInit(): void {
    
    this.test.logData();

    
  }
  
}