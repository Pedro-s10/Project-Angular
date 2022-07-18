import { Component, OnInit } from '@angular/core';
import { Agent } from '../agent.model';
import { AGENTS } from '../mock-agents';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss'],
})
export class AgentsComponent {
  agents_list = AGENTS;
  selectedAgent?: Agent;

  onSelect(agents: Agent): void {
    this.selectedAgent = agents;
  }
}
