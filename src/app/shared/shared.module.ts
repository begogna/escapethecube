import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
// Import the icons we want to use in the application
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAuthModule, // For auth features
    AngularFirestoreModule, // For database features
  ],
  exports: [CommonModule, HttpClientModule, TranslateModule, MaterialModule, FontAwesomeModule, FlexLayoutModule],
  declarations: [],
  providers: [],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    // Add the icons to the library for convenient access in other components
    library.addIcons(faCoffee);
    library.addIcons(faFacebook);
  }
}
