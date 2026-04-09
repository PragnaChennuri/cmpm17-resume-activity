import { Component, computed, signal, Signal, WritableSignal} from '@angular/core';
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

  /** Working Experience. */
  experiences: Experience[] = EXPERIENCES;

  /** Writable signal to manage student state. */
  selectedName: WritableSignal<string>= signal('Jialai');

  // --------------- COMPUTED DATA -----------------------

  // --------------- EVENT HANDLING ----------------------

  // --------------- OTHER -------------------------------

  // --------------- LOAD AND CLEANUP --------------------
}


