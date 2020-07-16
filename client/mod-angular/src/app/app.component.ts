import Header from '../../../app-components/dist/header/Header';

customElements.get('app-header') || customElements.define('app-header', (Header as any));

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular9';

  onMessage(evt: any): void {
    console.log(evt.detail.text);
  }
}
