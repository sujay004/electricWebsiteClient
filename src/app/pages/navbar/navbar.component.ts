import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, AfterViewInit {

  constructor() { }


  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // console.log(this.toggleButton);
    // this.toggleButton.nativeElement.className = 'show';
    // this.menuDiv.nativeElement.className = 'show';
  }
}
