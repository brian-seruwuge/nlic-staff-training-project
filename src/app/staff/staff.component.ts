import { Component, OnInit } from '@angular/core';
import { AddStaffComponent } from '../add-staff/add-staff.component';
import {MatDialog} from '@angular/material';
import { EditStaffComponent } from '../edit-staff/edit-staff.component';
import { TrainingService } from '../services/training.service';






@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
 
  public Title: string;
  public Name: string;
  public Department:string;
  public Action: string;
  staff:any;



constructor(public dialog: MatDialog, private trainingServices:TrainingService) 
{ }


addStaff(): void {
  const dialogRef = this.dialog.open(AddStaffComponent, {
    width: '250px',
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log(result);
  });
}

editStaff(){
  const dialogRef = this.dialog.open(EditStaffComponent, {
    width: '250px',
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log(result);
  });

}

deleteStaff(){
this.staff.splice();

}



  ngOnInit() {
this.staff=this.trainingServices.getStaff();
  }

}
