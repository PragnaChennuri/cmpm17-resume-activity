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
  userName: string = "Stepan Muradkhanyan";
  userTitle = "Software Engineer";
  userImageSrc: string = "https://media.licdn.com/dms/image/v2/D5603AQGLI_B3Z8qQaQ/profile-displayphoto-shrink_800_800/B56ZaR37MTHsAg-/0/1746204080829?e=1776902400&v=beta&t=QKILS0h2Les3miWYnB8oKwZb9pk8fSAPQEYsER-EB64";
  userSkills = ['Python', 'JavaScript', 'SQL', 'Java']
}