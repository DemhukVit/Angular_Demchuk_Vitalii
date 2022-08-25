import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoCard} from "../../../app/interfaces/application.interfaces";

@Component({
  selector: 'app-todo-cart',
  templateUrl: './todo-cart.component.html',
  styleUrls: ['./todo-cart.component.scss']
})
export class TodoCartComponent implements OnInit {
  @Input() cardNumber: number = 0;
  @Input() todoCard!: TodoCard;
  @Output() changeTodoListStatus: EventEmitter<void> = new EventEmitter<void>();
  @Output() deleteTodoEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() editTodoEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {

  }

  todoStatusChange() {
    this.changeTodoListStatus.emit();
  }

  deleteTodo() {
    this.deleteTodoEvent.emit();
  }

  editTodo() {
    this.editTodoEvent.emit();
  }
}
