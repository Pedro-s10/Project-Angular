import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AgentDetailComponent } from './agent-detail/agent-detail.component';
import { AgentsComponent } from './agents/agents.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MessagesComponent } from './messages/messages.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [AppComponent, AgentsComponent, AgentDetailComponent, MessagesComponent],
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, MatToolbarModule, MatButtonModule, MatExpansionModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
