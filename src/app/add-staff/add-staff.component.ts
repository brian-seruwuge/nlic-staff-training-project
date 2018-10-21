import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.scss']
})
export class AddStaffComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<AddStaffComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

save(){
  this.dialogRef.close("It was saved");

}
}
