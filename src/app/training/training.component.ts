import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../services/training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
topics=[
  'Jira','Geoserver','System configuration','System deployment','Testing','Security'
]

staffPerTopic=[
  {topic:'Jira',staff:[{name:'All staff', Department:'All departments'}]},
  {topic:'Geoserver', staff:[{name:'All staff', Department:'All departments'}]},
  {topic:'System configuration ', 
  staff:[{name:'Alani Jimmy', Department:'Development'},
  {name:'Mivule Joseph', Department:'Development'},
  {name:'Sseruwugge Brian', Department:'Development'},
  {name:'Nanjubu Felix', Department:'Development'},
  {name:'Orimwesiga Preston', Department:'Development'},
  {name:'Muwanguzi Earnest', Department:'Development'}
]},
  {topic:'System deployment', 
  staff:[{name:'Daniel Muwanguzi', Department:'Hardware/support'},
  {name:'Wycliff Kayombya', Department:'Hardware/support'},
  {name:'Ssemwanga Andrew', Department:'Hardware/support'},
  {name:'Nakato Deborah', Department:'Hardware/support'},
  {name:'Ivan Tumwesige', Department:'Hardware/support'},
  {name:'Nassolo Sylivia', Department:'Hardware/support'},
  {name:'Kalule Baker', Department:'Hardware/support'},
  {name:'Musa', Department:'Hardware/support'},
  {name:'Ronald', Department:'Hardware/support'},
]},
  {topic:'Testing', 
  staff:[{name:'Joseph Opio', Department:'testing'},
  {name:'Nakayenga Gertrude', Department:'testing'},
  {name:'Aisha Sainah', Department:'testing'},
]},
  {topic:'Security',
  staff:[{name:'Solomon Ruzima', Department:'Security'},
  {name:'Onyu Lenin', Department:'Security'}
]}
]
  constructor(private trainingServices:TrainingService) { }

  ngOnInit() {
  }

}
