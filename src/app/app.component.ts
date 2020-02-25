import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'etc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'escapethecube';

  constructor(translate: TranslateService, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('es');

    // Register custom icons from images
    this.matIconRegistry.addSvgIcon('es_flag', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/spain-flag.svg'));
    this.matIconRegistry.addSvgIcon('us_flag', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/us-flag.svg'));
  }
}
