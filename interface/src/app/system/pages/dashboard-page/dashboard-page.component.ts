import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

interface User{
  name:string
  email:string
  phone:string
}
const listUser = [
  {
    name: 'John',
    email: 'john@example.com',
    phone: '123123'
  },
  {
    name: 'Juan',
    email: 'Juan@example.com',
    phone: '654654'
  }
]

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
  providers:[DecimalPipe]
})


export class DashboardPageComponent {
  data = listUser
  tableForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ){
    this.tableForm = this.fb.group({
      rows:this.fb.array([])
    })
  }

  ngOnInit(){
    this.data.forEach(({name,email,phone})=>this.addRow(name,email,phone))
  }

  get rowsArray(){
    return this.tableForm.get('rows') as FormArray
  }

  addRow(name:string='' ,email:string='' ,phone:string=''){
    this.rowsArray.push(this.createRow(name, email, phone))
  }

  createRow(name:string='' ,email:string='' ,phone:string=''){
    return this.fb.group({
      name,
      email,
      phone
    })
  }

  onSubmit() {
    const rowsData = this.rowsArray.getRawValue();
  console.log(rowsData);
    // Aquí puedes realizar acciones adicionales, como enviar los datos a un servidor.
  }
  
}
