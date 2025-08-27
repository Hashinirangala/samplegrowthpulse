import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GoalDetail } from 'src/app/shared/goal-detail.model';
import { GoalDetailService } from 'src/app/shared/goal-detail.service';

@Component({
  selector: 'app-goal-detail-form',
  templateUrl: './goal-detail-form.component.html',
  styleUrls: ['./goal-detail-form.component.css'],
})
export class GoalDetailFormComponent implements OnInit {
  constructor(public service: GoalDetailService, private toastr: ToastrService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {

   if(form.valid){
     this.service.postGoalDetail()
    .subscribe({
      next: res => {
           this.service.list = res as GoalDetail[];
           this.service.resetForm(form);
           this.toastr.success('Inserted successfully', 'Goal Detail Register');
        },
      error: err => {console.log(err) }
    });
   }
  }
}
