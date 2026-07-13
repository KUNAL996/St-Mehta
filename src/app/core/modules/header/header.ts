import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  isMobileMenuOpen = false;
  isScrolled = false;

  dropdownStates = {
    ourSchool: false,
    about: false,
    ppSection: false,
    pSection: false,
    sSection: false,
    activities: false
  };

  mobileDropdownStates = {
    ourSchool: false,
    about: false,
    ppSection: false,
    pSection: false,
    sSection: false,
    activities: false
  };

  ngOnInit(): void {
    this.onWindowScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollY > 50;
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    if (window.innerWidth > 768) {
      this.isMobileMenuOpen = false;
      this.mobileDropdownStates = {
        ourSchool: false,
        about: false,
        ppSection: false,
        pSection: false,
        sSection: false,
        activities: false
      };
    }
  }

  showDropdown(dropdown: keyof typeof this.dropdownStates) {
    this.dropdownStates[dropdown] = true;
  }

  hideDropdown(dropdown: keyof typeof this.dropdownStates) {
    this.dropdownStates[dropdown] = false;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    // Prevent body scroll when mobile menu is open
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = 'auto';

    // Close all mobile dropdowns
    this.mobileDropdownStates = {
      ourSchool: false,
      about: false,
      ppSection: false,
      pSection: false,
      sSection: false,
      activities: false
    };
  }

  toggleMobileDropdown(dropdown: keyof typeof this.mobileDropdownStates) {
    this.mobileDropdownStates[dropdown] = !this.mobileDropdownStates[dropdown];
  }

  constructor(private router: Router) { }

  isDropdownActive(section: string): boolean {
    const url = this.router.url;
    if (section === 'ourSchool') {
      return url.startsWith('/schoolHistory') || url.startsWith('/pre-primary') || url.startsWith('/primary') || url.startsWith('/secondary');
    } else if (section === 'activities') {
      return url.startsWith('/activities') || url.startsWith('/achievements') || url.startsWith('/events');
    }
    return false;
  }

}
