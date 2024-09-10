import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  // TODO: Complete with the fetch
  userName: string = 'John Doe';
  userRole: string = 'Admin'; 

  constructor() { }

  ngOnInit(): void {
  }

}
