import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from './main.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ToolsComponent } from './tools/tools.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ClientdetailsComponent } from './tabs/clientdetails/clientdetails.component';
import { FinalsummaryComponent } from './tabs/finalsummary/finalsummary.component';
import { RiskassesmentComponent } from './tabs/riskassesment/riskassesment.component';
import { AttachmentsComponent } from './tabs/attachments/attachments.component';
import { ProposeapproveComponent } from './tabs/proposeapprove/proposeapprove.component';
import { GenpdfComponent } from './tabs/genpdf/genpdf.component';



@NgModule({
  imports: [
    CommonModule,BrowserModule,FormsModule
  ],
  declarations: [
  MainComponent,
  HeaderComponent,
  ToolsComponent,
  NavigationComponent,
  ClientdetailsComponent,
  FinalsummaryComponent,
  RiskassesmentComponent,
  AttachmentsComponent,
  ProposeapproveComponent,
  GenpdfComponent],
  bootstrap: [MainComponent],
})
export class AppModule { }