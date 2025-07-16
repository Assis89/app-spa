import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-painel-controle',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './painel-controle.component.html',
  styleUrls: ['./painel-controle.component.css']
})
export class PainelControleComponent {
  constructor(private auth: AuthService, private router: Router) {}

  /** Método simples para sair da área restrita */
  logout(): void {
    this.auth.logout();
    this.router.navigate(['/painel']);
  }
}
