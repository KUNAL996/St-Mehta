import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./core/modules/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.scrollY > 200;
    const scrollBtn = document.getElementById('scrollToTopBtn');
    if (scrollBtn) {
      scrollBtn.style.display = this.showScrollButton ? 'block' : 'none';
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
