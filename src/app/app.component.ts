import { Component } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Podcaster';
  display = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.display = true;
        console.log('display')
      }
      if (event instanceof NavigationEnd) {
        this.display = false;
        console.log('NOT display')
      }
      // if (event instanceof NavigationError) {
      // }
    });
  }
}