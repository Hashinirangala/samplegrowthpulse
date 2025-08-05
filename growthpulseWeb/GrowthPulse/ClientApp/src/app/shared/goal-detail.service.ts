import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GoalDetail } from './goal-detail.model';

@Injectable({
  providedIn: 'root'
})
export class GoalDetailService {

  url: string = environment.apiBaseUrl + '/GoalDetail';
  list: GoalDetail[] = [];

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
}