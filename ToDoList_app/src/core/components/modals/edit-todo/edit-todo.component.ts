import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TodoCard} from "../../../../app/interfaces/application.interfaces";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({ });

  constructor(
    @Inject(MAT_DIALOG_DATA) private readonly data: TodoCard,
    private dialogRef: MatDialogRef<EditTodoComponent>,

  ){}

  ngOnInit(): void {
  }
public ininFormGroup(): void{
    this.formGroup.setControl('title', new FormControl(''));
    this.formGroup.setControl('dateOfCreation', new FormControl(''));
}

}
