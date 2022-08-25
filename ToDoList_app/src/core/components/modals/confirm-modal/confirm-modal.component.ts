import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  constructor(
    private DialogRef: MatDialogRef<ConfirmModalComponent>
  ) {
  }

  ngOnInit(): void {
  }

  public confirm(): void {
    this.DialogRef.close(true);
  }

  public close(): void {
    this.DialogRef.close();
  }
}
