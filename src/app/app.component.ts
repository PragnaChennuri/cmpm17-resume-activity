import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { Experience } from './experience/experience.model';
import { EXPERIENCES } from './experience/experience.mock';

@Component({
  selector: 'app-component',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  // --------------- INPUTS AND OUTPUTS ------------------

  // --------------- LOCAL UI STATE ----------------------
  name: string = 'Jialai Li';
  // readonly skills: string[] = ['C++', 'Python', 'Angular', 'ChatGPT'];
  title: string = 'cmpm17-resume-activity';
  profilePic: string = 'images/jialai.png';
  leadership: string = 'My lovely life';
  skills: string[] = ['C++', 'Python', 'Angular', 'ChatGPT'];

  /** Student working Experience. */
  experiences: Experience[] = EXPERIENCES;

  /** Student name. */
  SelectedName: WritableSignal<string> = signal('Psi');
  
  // --------------- COMPUTED DATA -----------------------

  /** Computed signal selected Working Experience. */
  workingExperience: Signal<Experience | undefined> = computed(() => {
    return this.experiences.find(
      experience => experience.name === this.SelectedName()
    )
  })
  // --------------- EVENT HANDLING ----------------------

  /** Change student name when on the button onClicked. */
  changeName() {
    this.SelectedName.set('cmpm17-student');
  }

  // --------------- OTHER -------------------------------

  // --------------- LOAD AND CLEANUP --------------------
}


