import { Component, OnInit } from '@angular/core';
import { GoalDetailService } from '../shared/goal-detail.service';

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

}
