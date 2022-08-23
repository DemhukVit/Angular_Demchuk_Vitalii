import {Component, Input, OnInit} from '@angular/core';
import {TodoCard} from "../../../app/interfaces/application.interfaces";

@Component({
  selector: 'app-todo-cart',
  templateUrl: './todo-cart.component.html',
  styleUrls: ['./todo-cart.component.scss']
})
export class TodoCartComponent implements OnInit {
  @Input() cardNumber: number = 0;
  @Input() todoCard! : TodoCard;

  constructor() {
  }

  ngOnInit(): void {

  }

  todoStatusChange() {
    this.todoCard.isFinished = !this.todoCard.isFinished;
  }

}
