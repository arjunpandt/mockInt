import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit{
  private activated = inject(ActivatedRoute)

  id=1;
  myForm = new FormGroup({
    name: new FormControl('Arjun')
  })
  ngOnInit(): void {
    console.log(this.activated.snapshot.params['id']);
    
  }

  getId = () =>{
    console.log(this.activated.snapshot.queryParams['id2']);
    
  }

}
