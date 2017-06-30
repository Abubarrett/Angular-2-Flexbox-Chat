import { Routes, RouterModule } from '@angular/router';

//app component
import { AppComponent } from './app.component';

//views
import { ChatsComponent } from './views/chats/chats.component';
import { ChatComponent } from './views/chat/chat.component';


const appRoutes: Routes = [
 	{ 
 		path: '',
 		component: ChatsComponent
 	},
 	{ 
 		path: 'chat',
 		component: ChatComponent
 	}
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);












