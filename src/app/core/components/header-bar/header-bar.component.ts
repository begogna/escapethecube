import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'etc-header-bar',
  templateUrl: 'header-bar.component.html',
  styleUrls: ['header-bar.component.scss'],
})
export class HeaderBarComponent implements OnInit {
  public homeIcon = faHome;
  constructor(private translate: TranslateService) {}

  ngOnInit() {}

  useLanguage(language: string) {
    this.translate.use(language);
  }
}
