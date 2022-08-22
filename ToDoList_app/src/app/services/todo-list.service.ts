import {Injectable} from "@angular/core";
import {ApplicationInterfaces} from "../interfaces/application.interfaces";

@Injectable({
providedIn: "root",
})
export class TodoListService{
  private todoList: ApplicationInterfaces[] = [
    {
      isFinished: true,
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
      isFinished: true,
      id: 3,
      title: 'I need Vino',
      dateOfCreation: new Date(),
      deadLineDate: new Date()
    },
  ];
  public get getTodoList():ApplicationInterfaces[]{
    return this.todoList
  }
}
