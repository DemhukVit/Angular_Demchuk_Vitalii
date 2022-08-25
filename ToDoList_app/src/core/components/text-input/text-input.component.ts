import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  @Input() textControl: FormControl= new FormControl()
  public value: string = 'New task';

  constructor() { }

  ngOnInit(): void {

  }

 public resetControl():void {
    this.textControl.reset('');
  }
}
