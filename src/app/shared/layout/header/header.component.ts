import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isConnected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleConnection(): void {
    this.isConnected = !this.isConnected;
  }

}
