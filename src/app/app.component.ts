import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-component',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cmpm17-resume-activity';

  currentUserName: string = 'Pragna'

  greeting: string = 'Good Evening';

  prevYear: number = 2025;
  newYear: number = 2026;

  isGoodMorning(): boolean {
    return this.greeting === 'Good Morning';
  };
}
