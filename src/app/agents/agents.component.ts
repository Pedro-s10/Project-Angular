import { Component, OnInit } from '@angular/core';
import { Agent } from '../agent.model';
import { AgentService } from '../agent.service';


@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss'],
})
export class AgentsComponent implements OnInit {
  agents_list: Agent[] = [];


  constructor(
    private agentService: AgentService,

  ) {}

  ngOnInit(): void {
    this.getAgents();
  }

  getAgents(): void {
    this.agentService
      .getAgents()
      .subscribe((agents1) => (this.agents_list = agents1));
  }

}
