import Header from '../../../app-components/dist/header/Header';
import Footer from '../../../app-components/dist/footer/Footer';

customElements.get('app-header') || customElements.define('app-header', (Header as any));
customElements.get('app-footer') || customElements.define('app-footer', (Footer as any));

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

  onGood(evt: any): void {
    console.log(evt.detail.text);
  }
}
