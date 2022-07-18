import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AgentDetailComponent } from './agent-detail/agent-detail.component';
import { AgentsComponent } from './agents/agents.component';


@NgModule({
  declarations: [AppComponent, AgentsComponent, AgentDetailComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
