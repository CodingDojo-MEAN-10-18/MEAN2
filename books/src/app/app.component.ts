import { Component } from '@angular/core';

import { Book } from './models';
import { NgForm } from '@angular/forms';

import { BOOKS } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular';
}
