import {Component, Input, OnInit } from '@angular/core';
import { Agent } from '../agent.model';

@Component({
  selector: 'app-agent-detail',
  templateUrl: './agent-detail.component.html',
  styleUrls: ['./agent-detail.component.scss']
})

export class AgentDetailComponent {
  @Input() agentd?: Agent;
}
