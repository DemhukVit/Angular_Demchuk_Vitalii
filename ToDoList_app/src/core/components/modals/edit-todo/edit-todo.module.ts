import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTodoComponent } from './edit-todo.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ButtonModule} from "../../button/button.module";
import {TextInputModule} from "../../text-input/text-input.module";



@NgModule({
  declarations: [
    EditTodoComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ButtonModule,
    TextInputModule,
  ]
})
export class EditTodoModule { }
