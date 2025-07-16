import { Injectable, signal } from '@angular/core';

/**
 * Interface para o payload de login.
 */
export interface Credenciais {
  usuario: string;
  senha: string; // ← corrigido
}

/**
 * Serviço singleton responsável por autenticação.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {

  /** Estado reativo: true = autenticado, false = anônimo */
  private readonly autenticado = signal(false);

  /** Login fixo: adm / 123 */
  login({ usuario, senha }: Credenciais): boolean {
    const ok = usuario === 'adm' && senha === '123'; // ← corrigido
    this.autenticado.set(ok);
    return ok;
  }

  /** Desloga o usuário */
  logout(): void {
    this.autenticado.set(false);
  }

  /** Verifica se está logado */
  isLoggedIn(): boolean {
    return this.autenticado();
  }
}
