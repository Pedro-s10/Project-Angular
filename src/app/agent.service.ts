import { Injectable } from '@angular/core';
import { AGENTS } from './mock-agents';
import { Agent } from './agent.model';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

// usa o conceito de injeção de dependencia (Pode ser injetado em outro lugar e com isso podendo utilizar todos os metodos que estão dentro)
@Injectable({
  providedIn: 'root',
})
export class AgentService {
  constructor(private messageService: MessageService) {}

  getAgents(): Observable<Agent[]> {
    const agents1 = of(AGENTS);
    this.messageService.add('');
    return agents1;
  }
}
