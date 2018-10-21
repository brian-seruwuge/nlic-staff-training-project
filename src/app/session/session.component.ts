import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../services/training.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {

  constructor(private trainingServices:TrainingService) { }

  ngOnInit() {
  }

}
