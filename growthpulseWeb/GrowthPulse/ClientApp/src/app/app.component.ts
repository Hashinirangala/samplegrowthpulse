import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) { }

   setGoals() {
    this.router.navigate([{ outlets: { ['goal-details']: ['goal-details'] } }]);
  }

}
