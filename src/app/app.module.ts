import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CellComponent } from './components/cell/cell.component';
import { ChatComponent } from './views/chat/chat.component';
import { ChatsComponent } from './views/chats/chats.component';

//routing
import { routing, appRoutingProviders } from './app.routes';
import { ChatCellComponent } from './components/chat-cell/chat-cell.component';


@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    ChatComponent,
    ChatsComponent,
    ChatCellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
