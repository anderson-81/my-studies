import { Injectable, EventEmitter } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private authUser = false;

  constructor(private router: Router) { }

  // Sera para emitir evento e avisar se e pra mostrar o menu ou nao.

  showMenuEmitter = new EventEmitter<boolean>();

  // No app.component.ts, colocar uma variavel pra receber o resultado desse evento.

  Login(user: User) {
    if ((user.login === 'anderson') && (user.password === '121181')) {
      this.authUser = true;
      this.showMenuEmitter.emit(true); // Mostrar menu.
      this.router.navigate(['/']);
    } else {
      this.showMenuEmitter.emit(false); // Nao mostrar menu.
      this.authUser = false;
    }
  }
  // Serviço de login, eu coloco no AppModule, ficara de escopo pra toda aplicação.
  // Tambem preciso me increverm atraves do metodo ngInit nas mudanças que serao geradas.

  // Sera chamado pelo CanActivate para verificar se o usuario esta logado ou nao.
  IsAuthenticated() {
    return this.authUser;
  }
}
