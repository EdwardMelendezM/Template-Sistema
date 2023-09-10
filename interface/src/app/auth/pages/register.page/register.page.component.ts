import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register.page',
  templateUrl: './register.page.component.html',
  styleUrls: ['./register.page.component.css']
})
export class RegisterPageComponent {
  constructor(
    private fb: FormBuilder
  ) { }
  formRegister = this.fb.group({
    user: ["", [Validators.required]],
    name: ["", [Validators.required]],
    password: ["", [Validators.required]], 
  })

  getValueForm(name: string) {
    return this.formRegister.get(name)!.value
  }
 
  onSubmit() {
    if (this.formRegister.valid) {
      const userValue = this.getValueForm('user');
      const userName = this.getValueForm('name');
      const passwordValue = this.getValueForm('password');
      console.log('Name:', userName);
      console.log('User:', userValue);
      console.log('Password:', passwordValue);
      // Puedes agregar lógica adicional aquí, como enviar los datos al servidor
    }
  }
}
