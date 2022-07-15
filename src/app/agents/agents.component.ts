import { Component, OnInit } from '@angular/core';
import { Agent } from '../agent.model';
import { AGENTS } from '../mock-agents';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent{
  agents: Agent = {
    id: 1,
    name: 'Sova',
  };
  agents_list = AGENTS
}
