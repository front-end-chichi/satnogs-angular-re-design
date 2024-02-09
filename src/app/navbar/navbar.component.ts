import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor( private router: Router)
  {}
  
  onTabClick(event: any)
  {
    let clickedElement = event.target;
    
    let activeButton = document.querySelector(".selected");
    if( activeButton ) {activeButton.classList.remove("selected");}

    clickedElement.classList += ' selected';
  }

  onHamburgerMenuClick(event: any)
  {
    let menuIcon = event.target;

    if(menuIcon.classList.contains("clicked"))
    {
      menuIcon.classList.remove('clicked')
      this.router.navigate(['/observations']);
    }
    else
    {
      menuIcon.classList += ' clicked';
      this.router.navigate(['/hamburgerMenu']);
    }  
  }
  
}
