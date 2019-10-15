import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
selectedTab:string;
  constructor() { }

  ngOnInit() {
  }
  selectTab(tabDetails:string):void{
    alert("test::::"+tabDetails);
this.selectedTab=tabDetails;

  }

}