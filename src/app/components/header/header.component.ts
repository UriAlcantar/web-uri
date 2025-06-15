import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isDarkMode: boolean = false;
  isMenuOpen = false;

  toggleDarkMode(): void {
    this.isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark' ? true : false;
    if (this.isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }



  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }




}
