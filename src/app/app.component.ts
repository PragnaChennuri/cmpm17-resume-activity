import { Component, computed, Signal, signal, WritableSignal} from '@angular/core';
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

  /** My name. */
  name: string = 'Jialai Li';

  /** Resume title. */
  title: string = 'cmpm17-resume-activity';

  /** The description of my leadership. */
  leadership: string = 'My lovely life';

  /** My skills. */
  skills: string[] = ['C++', 'Python', 'Angular', 'ChatGPT'];

  /** Working experiences. */
  experiences: Experience[] = EXPERIENCES;

  /** Current user name. */
  currentName: WritableSignal<string> = signal('pppragna-Li');

  // --------------- COMPUTED DATA -----------------------

  /** Select cmpm17 student info. */
  cmpm17Student: Signal<Experience|undefined> = computed(() => {
    return this.experiences.find(
      exp => exp.name === this.currentName()
    )
  })

  // --------------- EVENT HANDLING ----------------------

  // --------------- OTHER -------------------------------

  // --------------- LOAD AND CLEANUP --------------------
}


