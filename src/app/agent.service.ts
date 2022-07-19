import { Injectable } from '@angular/core';
import { AGENTS } from './mock-agents';
import { Agent } from './agent.model';

// usa o conceito de injeção de dependencia (Pode ser injetado em outro lugar e com isso podendo utilizar todos os metodos que estão dentro)
@Injectable({
  providedIn: 'root'
})
export class AgentService {

  getAgents(): Agent[] {
    return AGENTS
  }
}
