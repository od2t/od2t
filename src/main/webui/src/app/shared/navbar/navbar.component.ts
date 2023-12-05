import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isCollapsed = new BehaviorSubject<boolean>(false);

  set collapsed(b: boolean) {
    this.isCollapsed.next(b);
  }

  get collapsed(): boolean {
    return this.isCollapsed.getValue();
  }

}
