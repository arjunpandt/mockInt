import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ChildCompComponent } from '../child-comp/child-comp.component';

@Component({
  selector: 'app-parent-comp',
  standalone: true,
  imports: [ChildCompComponent],
  templateUrl: './parent-comp.component.html',
  styleUrl: './parent-comp.component.css'
})
export class ParentCompComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  ngOnChanges(): void {
    console.log("OnChnges Called");
    
  }

  ngOnInit(): void {
    console.log("OnInit Called");
    
  }

  ngDoCheck(): void {
    console.log("DoChecked Called");
  }

  ngAfterContentInit(): void {
    console.log("AfterContentInit Called");
  }
  ngAfterContentChecked(): void {
    console.log("AfterContentChecked Called");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit Called");
  }
  ngAfterViewChecked(): void {
    console.log("AfterViewInitChecked called");
    
  }
  ngOnDestroy(): void {
    console.log('Component DEstroy');
    
  }


  
 parentData = "Parent Data";

 funToFetchData = (data:string) =>{
  console.log(data);
  
 }
}
