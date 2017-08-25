import { Component } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2';

@Component({
  selector: 'my-app',
  template: `
  <navbar></navbar>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {

    constructor(Angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {}

}
