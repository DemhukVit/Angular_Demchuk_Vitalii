import {Component, OnInit} from '@angular/core';
import {TodoCard} from "./interfaces/application.interfaces";
import {TodoListService} from "./services/todo-list.service";
import {MatDialog, MatDialogConfig, MatDialogModule} from "@angular/material/dialog";
import {ConfirmModalComponent} from "../core/components/modals/confirm-modal/confirm-modal.component";
import {EditTodoModule} from "../core/components/modals/edit-todo/edit-todo.module";
import {EditTodoComponent} from "../core/components/modals/edit-todo/edit-todo.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ToDoList_app';
  public todoList: TodoCard[] = [];

  constructor(
    private todoListService: TodoListService,
    private dialog: MatDialog,
  ) {
  }

  public ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList;
  }

  public handleUpdate(name: string): void {
    this.todoListService.setNewTodo = name;
    this.todoList = this.todoListService.getTodoList;
  }

  public changeTodoListStatus(todo: TodoCard): void {
    this.todoListService.setNewTodoStatusById = todo.id
    this.todoList = this.todoListService.getTodoList;
  }

  public deleteTodo(todo: TodoCard): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '350px';
    dialogConfig.height = '170px';
    const dialogRef = this.dialog.open(ConfirmModalComponent, dialogConfig)
 dialogRef.afterClosed().subscribe((result: boolean)=>{
   if(result) {
     this.todoListService.deleteTodoById(todo.id);
     this.todoList = this.todoListService.getTodoList;
   }

 });


  }


 public editTodo(todo: TodoCard): void {
   const dialogConfig = new MatDialogConfig();
   dialogConfig.width = '300px';
   dialogConfig.height = '250px';
   dialogConfig.data= todo;

   this.dialog.open(EditTodoComponent, dialogConfig);
  }
}
