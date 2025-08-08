import { Component, OnInit } from '@angular/core';
import { GoalDetailService } from '../shared/goal-detail.service';
import { NgForm } from '@angular/forms';
import { error } from 'console';

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

  onSubmit(form: NgForm) {
  this.service.postGoalDetail()
  .subscribe({
    next: res => {
      
      error: err{ console.log(err)}
  })

}

}
