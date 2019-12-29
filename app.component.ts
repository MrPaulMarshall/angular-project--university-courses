import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-projekt';
  openForm = false;

  changeFormFlag() {
    this.openForm = !this.openForm;
  }
}
