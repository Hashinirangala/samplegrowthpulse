import { Component, OnInit } from '@angular/core';
import { GoalDetailService } from '../shared/goal-detail.service';
import { GoalDetail } from '../shared/goal-detail.model';

@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})
export class GoalDetailsComponent implements OnInit {

  constructor(public service : GoalDetailService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: GoalDetail){
    this.service.formData = Object.assign({},selectedRecord);
  }

}
