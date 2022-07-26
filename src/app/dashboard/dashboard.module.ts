import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MaterialModule,

    FlexLayoutModule,
    DashboardRoutingModule,

  ]
})
export class DashboardModule { }
