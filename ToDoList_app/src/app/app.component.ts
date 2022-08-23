import {Component, OnInit} from '@angular/core';
import {TodoCard} from "./interfaces/application.interfaces";
import {TodoListService} from "./services/todo-list.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ToDoList_app';
  public todoList: TodoCard[] = [];

 constructor( private todoListService: TodoListService) {
 }

 public ngOnInit(): void {
   this.todoList=this.todoListService.getTodoList;
 }

  public handleUpdate(name: string): void {
   this.todoListService.setNewTodo = name;
    this.todoList=this.todoListService.getTodoList;
  }
}
