import { Component } from '@angular/core';

//Importando o lodash
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  //Lista para ser impressa no ngFor
  //list = _.map([1,2,3],(n) => `# ${n}`);
}
