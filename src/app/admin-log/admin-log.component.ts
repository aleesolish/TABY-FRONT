import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { User } from '../models/usuario';

@Component({
  selector: 'app-admin-log',
  templateUrl: './admin-log.component.html',
  styleUrls: ['./admin-log.component.css'],
  providers:[UsuarioService]
})
export class AdminLogComponent implements OnInit {

  userz;
  yucer = [];
  constructor(private userService: UsuarioService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((User) => this.yucer= User);
  }

  removeUser(id){
    const index: number = this.yucer.indexOf(id);
    this.userService.deleteUser(id).subscribe((user) => { 
          this.yucer.splice(index, 1);
    });
  }

  updateUser(id)
  {
    
    console.log(id);
    this.userService.updateUser(id).subscribe((user)=> {
        this.userz = user;
        alert("Ya puedes editar el usuario con nombre: "+this.userz.name)
    });
    
  }
  update(nombre:string, correo: string, pw: string ): void{
    console.log(this.userz._id)
    if (!nombre || !correo || !pw) { 
      alert("Todos los campos deben tener un valor para la edicion.");
      return; 
    } 
    this.userService.update(this.userz._id, {nombre, correo, pw } as User).subscribe((user) => {  });
    alert("Usuario actualizado")

  }
}
