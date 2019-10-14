import { Component, OnInit,Input } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-heros-details',
  templateUrl: './heros-details.component.html',
  styleUrls: ['./heros-details.component.css']
})
export class HerosDetailsComponent implements OnInit {
@Input() selectedHero:Hero;
  constructor() { }

  ngOnInit() {
  }

}