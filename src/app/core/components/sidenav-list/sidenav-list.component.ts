import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'etc-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss'],
})
export class SidenavListComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {}

  onClose() {
    this.closeSidenav.emit();
  }

  useLanguage(language: string) {
    this.translate.use(language);
    this.onClose();
  }
}
