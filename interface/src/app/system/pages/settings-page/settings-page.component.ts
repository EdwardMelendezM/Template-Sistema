import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent {
  name = 'Angular';
  formData!: FormGroup;
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formData = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  onSubmit(form: any) {
    console.log(form);
  }
}
