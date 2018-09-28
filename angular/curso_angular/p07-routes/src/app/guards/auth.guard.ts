import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanLoad,
  Route
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

// Crio a classe implementando o CanActivate:
// "posso ativar uma determinada rota?"
@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private _authService: AuthService, private _router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    console.log('APP - CanActivate');

    // Retorno do proprio serviço se o usuario esta ou nao autenticado.
    // No exemplo, sera uma atributo da classe Service do componente.
    /*
    if (this._authService.IsAuthenticated()) {
      return true;
    }

    // Redirecionar para login novamente se errar o login:
    this._router.navigate(['/login']);
    return false;
    */

    // Refatoração para trabalhar com o CanLoad.
    return this.checkAccess();
  }

  // Depois que implementar o guards, devemos aplica-los à rota, atraves do
  // uso do atributo canActivate da rota.
  // "app.routing.module.ts"

  // Refatoração
  private checkAccess() {
    if (this._authService.IsAuthenticated()) {
      return true;
    }
    // Redirecionar para login novamente se errar o login:
    this._router.navigate(['/login']);
    return false;
  }

  canLoad(route: Route)
    : Observable<boolean> | Promise<boolean> | boolean {
    console.log('VEICULES - CanLoad');
    return this.checkAccess();
  }
  // Apos criar o canLoad, passar para todas as rotas que quero verificar atraves do atributo,
  // canLoad, ou guard que no caso é o AuthGuard para verificar.
}
