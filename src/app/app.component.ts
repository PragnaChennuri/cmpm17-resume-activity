import { Component, computed, inject, signal, Signal, WritableSignal} from '@angular/core';
import { Experience } from './experience/experience.model';
import { EXPERIENCES } from './experience/experience.mock';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-component',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private dialog = inject(MatDialog);
  // --------------- INPUTS AND OUTPUTS ------------------

  // --------------- LOCAL UI STATE ----------------------

  /** My name. */
  name: string = 'Jialai Li';
  
  /** The current user's name.*/
  currentUserName: string = "Jialai Li";

  /** My skills. */
  skills: string[] = ['C++', 'Python', 'Angular', 'ChatGPT'];

  /** The working Experience of CMPM 17 students. */
  experiences: Experience[] = EXPERIENCES;
  
  /** The placeholder of the hard coded date. */
  dayRang: number = 2026;

  /** Writable signal to manage student state. */
  selectedName: WritableSignal<string>= signal('Jialai');

  /** Resume title. */
  title: string = 'cmpm17-resume-activity';


  /** The description of my leadership. */
  leadership: string = 'My lovely life';

  dialogRef: MatDialogRef<any> | undefined;


  // --------------- COMPUTED DATA -----------------------

  // --------------- EVENT HANDLING ----------------------

  // --------------- OTHER -------------------------------

  constructor(
  ) { }

  // --------------- LOAD AND CLEANUP --------------------


  /** Once clicked, change the student's name
   *  
   * @param {string} str - the incoming student of cmpm 17.
   * @param {boolean} isEnrolled - define if the student is in the class or not.
   * @returns {string} - return the the student's name you have changed.
   */
  changeName(str: "xxxxx", isEnrolled: true): string {
    this.name = 'Psi' + str;
    this.name = 'Psi' + str;
    this.name = 'Psi' + str;
    this.name = 'Psi' + str;
    return str;
  }

  openModal() {
    this.dialogRef = this.dialog.open(ModalComponent, {
      height: '90%',
      position: { bottom: '0' }
    })
  }
}


