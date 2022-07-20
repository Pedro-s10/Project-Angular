import { Component, OnInit } from '@angular/core';
import { Agent } from '../agent.model';
import { AgentService } from '../agent.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss'],
})
export class AgentsComponent implements OnInit {
  agents_list: Agent[] = [];
  selectedAgent?: Agent;

  constructor(
    private agentService: AgentService,
    private messagesServices: MessageService
  ) {}

  ngOnInit(): void {
    this.getAgents();
  }

  getAgents(): void {
    this.agentService
      .getAgents()
      .subscribe((agents1) => (this.agents_list = agents1));
  }

  onSelect(agents: Agent): void {
    this.selectedAgent = agents;
    this.messagesServices.add(` \n Agent: ${agents.name}`);
    this.messagesServices.add(`Message: ${agents.staff}`);
    //this.messagesServices.add('Selected Agent Name=' + agents.name);
  }
}
