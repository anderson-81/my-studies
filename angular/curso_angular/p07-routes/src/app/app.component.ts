import { Component, OnInit } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  showMenu = false;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    // Verificando aqui se pode ou nao mostrar o menu.
    this._authService.showMenuEmitter.subscribe(
      sMenu => {
        this.showMenu = sMenu;
        console.log(sMenu);
      }
    );
  }
}
