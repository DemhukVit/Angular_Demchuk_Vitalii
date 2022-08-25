import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() updateEvent: EventEmitter<string>= new EventEmitter<string>();

  public todoControl: FormControl = new FormControl('I must to ', [Validators.required]);

  createTodo() {
this.updateEvent.emit(this.todoControl.value);
this.todoControl.reset('I must to');
  }
}
