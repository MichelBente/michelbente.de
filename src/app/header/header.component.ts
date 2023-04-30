import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false;


  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.toggleMenu();
    const burger = document.getElementById('burger',) as HTMLInputElement | null;
    if (burger != null) {
      burger.checked = false;
    }
  }
}