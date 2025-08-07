import { Component, OnInit } from '@angular/core';
import { GoalDetailService } from 'src/app/shared/goal-detail.service';

@Component({
  selector: 'app-goal-detail-form',
  templateUrl: './goal-detail-form.component.html',
  styleUrls: ['./goal-detail-form.component.css']
})
export class GoalDetailFormComponent implements OnInit {

  constructor(public service : GoalDetailService) { }

  ngOnInit(): void {
  }

}
