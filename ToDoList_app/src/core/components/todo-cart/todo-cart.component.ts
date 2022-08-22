import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo-cart',
  templateUrl: './todo-cart.component.html',
  styleUrls: ['./todo-cart.component.scss']
})
export class TodoCartComponent implements OnInit {
  @Input() isToDoFinished:boolean = false;
  @Input() cardNumber: number = 0;
  @Input() cardText: string = 'I need beer';
  @Input() dateOfCreation: Date = new Date();
  @Input() deadLineDate: Date = new Date();

  constructor() {
  }

  ngOnInit(): void {
  }

}
