import { Component, HostBinding } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @HostBinding('class.app-root') ComponentClass = true;
}
