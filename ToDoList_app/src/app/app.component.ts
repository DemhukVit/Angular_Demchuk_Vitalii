import {Component, OnInit} from '@angular/core';
import {ApplicationInterfaces} from "./interfaces/application.interfaces";
import {TodoListService} from "./services/todo-list.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ToDoList_app';
  public todoList: ApplicationInterfaces[] = [];

 constructor( private todoListService: TodoListService) {
 }

 public ngOnInit(): void {
   this.todoList=this.todoListService.getTodoList;
   console.log(this.todoList);
 }
}
