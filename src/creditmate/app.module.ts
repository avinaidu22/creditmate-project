import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from './main.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ToolsComponent } from './tools/tools.component';
import { NavigationComponent } from './navigation/navigation.component';



@NgModule({
  imports: [
    CommonModule,BrowserModule,FormsModule
  ],
  declarations: [
  MainComponent,
  HeaderComponent,
  ToolsComponent,
  NavigationComponent],
  bootstrap: [MainComponent],
})
export class AppModule { }