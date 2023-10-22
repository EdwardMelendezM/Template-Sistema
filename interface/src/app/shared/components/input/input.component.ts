import { Component, Input } from '@angular/core';
import {FormControl} from "@angular/forms";
@Component({
  selector: 'input-app',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() formControl!: FormControl;
  @Input() label: string = "";
  @Input() name: string = "";
  @Input() placeholder: string = "";
  @Input() type: string = 'text';
}
