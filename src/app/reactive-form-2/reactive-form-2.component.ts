import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-2',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form-2.component.html',
  styleUrl: './reactive-form-2.component.css'
})
export class ReactiveForm2Component {
  myForm2 = new FormGroup({
    name2: new FormControl('Pandit')
  })
}
