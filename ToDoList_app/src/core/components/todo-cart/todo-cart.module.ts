import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCartComponent } from './todo-cart.component';
import {MatCardModule} from "@angular/material/card";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";



@NgModule({
    declarations: [
        TodoCartComponent
    ],
    exports: [
        TodoCartComponent
    ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSlideToggleModule
  ]
})
export class TodoCartModule { }
