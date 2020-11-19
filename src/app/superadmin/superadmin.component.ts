import { Component, OnInit } from '@angular/core';
import { AdminsService } from '../services/admins.service';
import { Admin } from '../models/admins';
import { UsuarioService } from '../services/usuario.service';
import { User } from '../models/usuario';

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.css'],
  providers:[AdminsService, UsuarioService]
})
export class SuperadminComponent implements OnInit {
  userz;
  yucer = [];
  admon;
  admonz=[];
  constructor(private adminService: AdminsService, private userService: UsuarioService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((User) => this.yucer= User);
    this.adminService.getAdmins().subscribe((Admin) => this.admonz= Admin);
  }
  
  addAdmin(nombre: string, correo: string, pw:string): void{ 
      
    if (!nombre || !correo || !pw) { 
      alert("Para registrar un administrador, no debe de haber campos vacíos.");
      return; 
    } 
    this.adminService.addAdmin({ nombre, correo, pw } as Admin).subscribe((admin) => {  });  
    
    alert("Nuevo admin creado");
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

  removeAdmin(id){
    const index: number = this.admonz.indexOf(id);
    this.adminService.deleteAdmin(id).subscribe((user) => { 
          this.admonz.splice(index, 1);
    });
  }

  updateAdmin(id)
  {
    
    console.log(id);
    this.adminService.updateAdmin(id).subscribe((admin)=> {
        this.admon = admin;
        alert("Ya puedes editar el Administrador con nombre: "+this.admon.name)
    });
    
  }
  update2(nombre:string, correo: string, pw: string ): void{
    console.log(this.admon._id)
    if (!nombre || !correo || !pw) { 
      alert("Todos los campos deben tener un valor para la edicion.");
      return; 
    } 
    this.userService.update(this.admon._id, {nombre, correo, pw } as Admin).subscribe((admin) => {  });
    alert("Admin actualizado")

  }
}
