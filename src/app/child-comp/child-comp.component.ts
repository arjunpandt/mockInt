import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-comp.component.html',
  styleUrl: './child-comp.component.css'
})
export class ChildCompComponent implements OnInit{
  @Input() dataFromParent!:string;
  @Output() dataForParent = new EventEmitter();
  
  ngOnInit(): void {
    console.log(this.dataFromParent);
    this.dataForParent.emit("Data from Child");
  }

}
