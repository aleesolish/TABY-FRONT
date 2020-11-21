import { Component, OnInit } from '@angular/core';
import { MoodsService } from '../services/moods.service';
import { Mood } from '../models/mood';


@Component({
  selector: 'app-mood',
  templateUrl: './mood.component.html',
  styleUrls: ['./mood.component.css'],
  providers:[MoodsService]
})
export class MoodComponent implements OnInit {
  mudz=[];

  constructor(private moodService: MoodsService) { }

  ngOnInit(): void {
    this.moodService.getMoods().subscribe((Mood) => this.mudz= Mood);
  }
  addMood(nombre:string): void{ 
      
    console.log(nombre);
    this.moodService.addMood({nombre} as Mood).subscribe((mood) => {  });  
    console.log({nombre} as Mood);
    
    alert("Mood registrado");
  } 
  
}
