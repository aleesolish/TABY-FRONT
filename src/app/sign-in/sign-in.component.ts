import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { User } from '../models/usuario';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers:[UsuarioService]
})
export class SignInComponent implements OnInit {

  constructor(private userService: UsuarioService) { }

  ngOnInit(): void {
  }
 
  addUsers(nombre:string, correo: string, pw: string ): void{ 
      
    if (!nombre || !correo || !pw) { 
      alert("Para registrar un bote, no debe de haber campos vacíos.");
      return; 
    } 
    this.userService.addUser({nombre, correo, pw } as User).subscribe((user) => {  });  
    
    alert("Nueva cuenta creada");
  } 
}
