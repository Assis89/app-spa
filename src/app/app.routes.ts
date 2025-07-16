import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { PainelComponent } from './pages/painel/painel.component';
import { PainelControleComponent } from './pages/painel-controle/painel-controle.component';
import { authGuard } from './guard/auth-guard.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'login', component: PainelComponent },
  { path: 'painel-controle', component: PainelControleComponent, canActivate: [authGuard] }
];


export const routeProviders = [
  { provide: 'authGuard', useValue: authGuard }
];
