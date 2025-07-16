import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * Guard de rota que permite navegação APENAS se autenticado.
 * Se não estiver, redireciona para /painel (tela de login).
 */
export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  // Se logado → libera; senão → redireciona para login
  return auth.isLoggedIn() ? true : router.createUrlTree(['/painel']);
};
