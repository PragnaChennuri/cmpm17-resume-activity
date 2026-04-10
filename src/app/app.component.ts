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

  currentUserName: string = 'Psi Padhya';

  currentYear: number = 2026;

  isCurrentYear(): boolean {
    return this.currentYear === 2026;
  }

  handleClick(){
    console.log("Button has been clicked");
  }

  // when I type a word on the keyboard and logs the keyboard event and the letter
  onKeyPressEvent(event: KeyboardEvent){
    console.log('Key Pressed', event.key);
  }
}