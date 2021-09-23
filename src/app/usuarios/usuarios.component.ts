import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {


  @Input()
  miFormulario : any;
  constructor(private formBuilder:FormBuilder) { 

   
  }

  ngOnInit(): void {
  }


  
  static formulario(){
    return new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      apellido: new FormControl('',[Validators.required])
    })
  }
 

  datos(){
    console.log(this.miFormulario.value);
  }
}
