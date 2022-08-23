import {Injectable} from "@angular/core";
import {TodoCard} from "../interfaces/application.interfaces";

@Injectable({
  providedIn: "root",
})
export class TodoListService {
  private todoList: TodoCard[] = [
    {
      isFinished: false,
      id: 1,
      title: 'I need Beer',
      dateOfCreation: new Date(),
      deadLineDate: new Date()
    },
    {
      isFinished: false,
      id: 2,
      title: 'I need Vodka',
      dateOfCreation: new Date(),
      deadLineDate: new Date()
    },
    {
      isFinished: false,
      id: 3,
      title: 'I need Vino',
      dateOfCreation: new Date(),
      deadLineDate: new Date()
    },
  ];

  public get getTodoList(): TodoCard[] {
    return this.todoList
  }

  // @ts-ignore
  public set setNewTodo(todoTitle: string): void {
    const newTodo: TodoCard = {
      isFinished: false,
      title: todoTitle,
      dateOfCreation: new Date(),
      deadLineDate: new Date(),
      id: Math.floor(Math.random() * 1000),
    }
    this.todoList = [...this.todoList, newTodo];
  }


}
