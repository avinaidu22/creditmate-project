import { CommonModule } from '@angular/common';
import {HerosComponent} from './herosComp/heros.component';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import { HerosDetailsComponent } from './heros-details/heros-details.component';
import { HeroService } from './heros.service';
import { MessageComponent } from './message/message.component';
import { MessageService } from './message.service';


@NgModule({
  imports: [
    CommonModule,BrowserModule,FormsModule
  ],
  declarations: [
   AppComponent, HerosComponent, HerosDetailsComponent, MessageComponent],
  bootstrap: [AppComponent],
  providers: [HeroService, MessageService],
})
export class AppModule { }