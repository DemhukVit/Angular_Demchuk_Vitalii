import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  public selectedValue: string = '';


  foods: { value: string; viewValue: string }[] = [
    {value: 'steak-0', viewValue: 'Vodka'},
    {value: 'pizza-1', viewValue: 'Beer'},
    {value: 'tacos-2', viewValue: 'Vino'},
  ];


  constructor() {
  }

  ngOnInit(): void {
  }

}
