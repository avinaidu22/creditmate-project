import { Component, OnInit,Input } from '@angular/core';
import {HEROS} from '../mock-heros';

import {Hero} from '../hero';
import  {HeroService}  from '../heros.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  //heros= HEROS;
  selectedHero:Hero;
  heross:Hero[];
  heroName:String;

test;

  constructor(private heroService:HeroService,private messageService:MessageService) { }

  ngOnInit() {
    this.getHeros();
  }
  onSelect(hero:Hero): void{
    this.heroName=hero.name;
    this.messageService.addMessage(this.heroName+' selected');
this.selectedHero=hero;
  }

getHeros(): void {
  this.heroService.getHeros().subscribe(heross1 => this.heross = heross1);
}

}