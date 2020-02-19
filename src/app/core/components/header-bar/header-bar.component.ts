import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'etc-header-bar',
  templateUrl: 'header-bar.component.html',
  styleUrls: ['header-bar.component.scss'],
})
export class HeaderBarComponent implements OnInit {
  public homeIcon = faHome;
  constructor() {}

  ngOnInit() {}
}
