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
// find percorre cada item e quando acha uma condição verdadeira ele retorna

  getAgent(id: number): Observable<Agent> {
    const agent = AGENTS.find(agent => agent.id === id)!;
    this.messageService.add(`Fetched agent id=${id}`);
    return of(agent);
  }
}
