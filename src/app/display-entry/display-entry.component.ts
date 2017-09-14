import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display-entry.component.html',
  styleUrls: ['./display-entry.component.css']
})
export class DisplayEntryComponent implements OnInit {

  @Input() printing = true;
  @Input() studentCollection;

  constructor() { }

  ngOnInit() {
  }

}