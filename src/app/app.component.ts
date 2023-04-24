import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio | Michél Bente';


  // ngOnInit(): void {
  //   AOS.init();
  // }

  scroll(id: HTMLElement) {
   id.scrollIntoView();
  }
}



