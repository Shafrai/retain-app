import { Component } from '@angular/core';

@Component({
  selector: 'notes-container',
  template: `<div class="row center-xs notes">
      <div class="col-xs-6 creator">
        <note-creator (createNote) = "OnCreateNote($event)"></note-creator>
      </div>
      <div class="notes col-xs-8">
        <div class="row between-xs">
          <note-card 
            class="col-xs-4"
            [note]="note"
            *ngFor="let note of notes; let i = index"
            (checked)="onNoteChecked(i)"
          >
          </note-card>
        </div>
      </div>
    </div>
	`,
  styles:[`
  .notes {
  padding-top: 50px;
}
.creator {
  margin-bottom: 40px; 
}`]
})
export class NotesContainer {
    notes=[
      {
        title: 'this is a note',
        value: 'eat some food',
        color: 'lightblue'
      },
      {
        title: 'Cook',
        value: 'Cook you food',
        color: 'Red'
      },
      {
        title: 'Doggy',
        value: 'Walk to the doog',
        color: 'yellow'
      }];
      onNoteChecked(i:number){
        this.notes.splice(i, 1);
      }
      OnCreateNote($event){
        console.log($event);
        console.log('$event');
        this.notes.push($event);
      }
}