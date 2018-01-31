import { Component, Input, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'app-root',
  //moduleId: module.id,
  template: `<h1>Angular Router</h1>
  <nav>
    <a [routerLink]="['/login']">login</a>
    <a [routerLink]="['/registration']">Registration</a>
  </nav>
  <router-outlet></router-outlet>`,
})
export class HomeComponent {
 name : string = 'home';
}
