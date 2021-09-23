import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosComponent } from './usuarios/usuarios.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  newForm: any;


  get datosFormArray():FormArray{
    return this.newForm.get('Contenido') as FormArray;
  }
  constructor(private formBuilder:FormBuilder){

    
  }

  ngOnInit() {
    this.generarForm();
  }

  generarForm(){
    this.newForm = new FormGroup({  
      Contenido: new FormArray([
          UsuariosComponent.formulario()
      ])

    })
  }

  addContact(){
    this.datosFormArray.push(UsuariosComponent.formulario());
  }


 

}
