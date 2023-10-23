import { Component, Input } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
@Component({
  selector: 'input-app',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() controlName!: string;
  @Input() placeholder!: string;
  @Input() label: string = "Ingrese el campo";
  @Input() parentForm!: FormGroup;
}
