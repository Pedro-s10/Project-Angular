import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentDetailComponent } from './components/agent-detail/agent-detail.component';
import { AgentsComponent } from './components/agents/agents.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardModule } from '../dashboard/dashboard.module';
import { AgentsRoutingModule } from './agents-routing.module';



@NgModule({
  declarations: [
    AgentsComponent,
    AgentDetailComponent,],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    AgentsRoutingModule
  ]
})
export class AgentsModule { }
