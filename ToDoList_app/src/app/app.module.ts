import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ButtonModule} from "../core/components/button/button.module";
import {HeaderModule} from "../core/components/header/header.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TodoCartModule} from "../core/components/todo-cart/todo-cart.module";
import {ConfirmModalModule} from "../core/components/modals/confirm-modal/confirm-modal.module";
import {EditTodoModule} from "../core/components/modals/edit-todo/edit-todo.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        ButtonModule,
        HeaderModule,
        BrowserAnimationsModule,
        TodoCartModule,
      ConfirmModalModule,
      EditTodoModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
