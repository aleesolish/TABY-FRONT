import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Habit } from '../models/habit';

@Component({
  selector: 'app-newhab',
  templateUrl: './newhab.component.html',
  styleUrls: ['./newhab.component.css'],
  providers:[DataService]
})
export class NewhabComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
 
  addHabits(name:string, intent: string, days: number, units: string, note: string): void{ 
      
    if (!name || !intent || !days || !units || !note) { 
      alert("Para registrar un habito, no debe de haber campos vacíos.");
      return; 
    } 
    this.dataService.addHabit({ name, intent, days, units, note } as Habit).subscribe((habit) => {  });  
    
    alert("Nuevo habito creado");
  } 
}
