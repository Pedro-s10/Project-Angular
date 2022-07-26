import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AgentDetailComponent } from './components/agent-detail/agent-detail.component';
import { AgentsComponent } from './components/agents/agents.component';
;


const routes: Routes = [

  { path: 'agents', component: AgentsComponent },
  { path: 'agents/:id', component: AgentDetailComponent},

];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentsRoutingModule { }
