import { Component, OnInit } from '@angular/core';
import { Agent } from '../core/models/agent.model';
import { AgentService } from '../core/services/agent.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  agentsdash: Agent[] = [];
  constructor(private agentService: AgentService) { }

  ngOnInit(): void {
    this.getAgents();
  }

  getAgents(): void {
    this.agentService.getAgents().subscribe(agents =>
      this.agentsdash = agents.slice(1, 5));

  }
}
