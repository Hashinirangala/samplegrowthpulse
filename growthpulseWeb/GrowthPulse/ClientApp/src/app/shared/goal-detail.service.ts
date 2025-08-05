import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoalDetailService {

  url: string =  '/GoalDetails';

  constructor(private http: HttpClient) { }

  refreshList() {

    this.http.get(this.url)
    .subscribe({
      next: res => {
        console.log(res);
      },
      error: err => { console.log(err); }
    })
  }
}