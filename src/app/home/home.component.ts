import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Habit } from '../models/habit';

import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[DataService]
})
export class HomeComponent implements OnInit {
  habhab;
  jabit = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getHabits().subscribe((Habit) => this.jabit= Habit);
    $(document).ready(function() {
      console.log('jquery loaded');
     
    });
    
      
      
    
   
    
    
  }
  
  
}
