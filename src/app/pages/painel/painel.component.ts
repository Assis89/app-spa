import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-painel',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent {

  /** Formulário reativo com validação simples */
  loginForm: FormGroup;

  /** Armazena mensagem de erro para exibir no template */
  erro = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    // Criação segura do formulário dentro do construtor
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      senha:   ['', Validators.required]
    });
  }

  /** Envia os dados para o serviço; redireciona ou mostra erro */
  entrar(): void {
    const credenciais = this.loginForm.value;

    if (this.auth.login(credenciais as any)) {
      this.router.navigate(['/painel-controle']);
    } else {
      console.log('Login inválido!');
      this.erro = 'Usuário ou senha inválidos';
      this.loginForm.reset();
    }
  }
}
