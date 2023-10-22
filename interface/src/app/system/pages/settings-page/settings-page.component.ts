import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent {
  formSetting = new FormGroup({
    name: new FormControl(""),
    age: new FormControl(""),
  });

  onSubmit() {
    console.log("enviando data");
    console.log(this.formSetting.value);
  }
}
