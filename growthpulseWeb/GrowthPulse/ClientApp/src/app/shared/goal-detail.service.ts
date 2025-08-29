import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GoalDetail } from './goal-detail.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GoalDetailService {

  url: string = environment.apiBaseUrl + '/GoalDetail';
  list: GoalDetail[] = [];
  formData: GoalDetail = new GoalDetail();
  formSubmitted: boolean = false;

  constructor(private http: HttpClient) { }

  refreshList() {

    this.http.get(this.url)
    .subscribe({
      next: res => {
        this.list = res as GoalDetail[];
      },
      error: err => { console.log(err); }
    })
  }

  postGoalDetail() {
    return this.http.post(this.url, this.formData);
  }

  putGoalDetail() {
    return this.http.put(this.url + '/' + this.formData.goalDetailId, this.formData);
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.formData = new GoalDetail();
    this.formSubmitted = false;
  }
}