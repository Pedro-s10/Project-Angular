import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Agent } from '../../../core/models/agent.model';
import { AgentService } from '../../../core/services/agent.service';

@Component({
  selector: 'app-agent-detail',
  templateUrl: './agent-detail.component.html',
  styleUrls: ['./agent-detail.component.scss'],
})
export class AgentDetailComponent implements OnInit{
  agentd!: Agent;

  constructor(
    private agentService: AgentService,
    private location: Location,
    private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
      this.getAgent();
    }

    getAgent(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      //console.log(id);
      this.agentService.getAgent(id).subscribe(agent => this.agentd = agent)
    }

    back(): void {
      this.location.back();
    }
}
