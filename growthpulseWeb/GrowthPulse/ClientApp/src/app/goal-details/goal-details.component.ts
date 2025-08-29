import { Component, OnInit } from '@angular/core';
import { GoalDetailService } from '../shared/goal-detail.service';
import { GoalDetail } from '../shared/goal-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})
export class GoalDetailsComponent implements OnInit {

  constructor(public service : GoalDetailService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: GoalDetail){
    this.service.formData = Object.assign({},selectedRecord);
  }

  onDelete(id: number){
    if(confirm('Are you sure to delete this record ?')){
    this.service.deleteGoalDetail(id)
     .subscribe({
      next: res => {
           this.service.list = res as GoalDetail[];
           this.toastr.error('Deleted successfully', 'Goal Detail Register');
        },
      error: err => {console.log(err) }
    });
  }

  }

}
