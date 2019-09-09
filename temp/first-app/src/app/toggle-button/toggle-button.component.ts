import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css'],
})
export class ToggleButtonComponent implements OnInit {
  hidden = true;
  clicks = [];
  count = 0;

  constructor() {}

  onToggleDetails() {
    this.hidden = !this.hidden;
    this.count += 1;
    this.clicks.push(new Date());
  }

  ngOnInit() {}
}
