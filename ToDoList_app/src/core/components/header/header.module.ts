import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {ButtonModule} from "../button/button.module";
import {TextInputModule} from "../text-input/text-input.module";
import {MatButtonModule} from "@angular/material/button";
import {SelectModule} from "../select/select.module";



@NgModule({
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        ButtonModule,
        TextInputModule,
        MatButtonModule,
        SelectModule
    ]
})
export class HeaderModule { }
