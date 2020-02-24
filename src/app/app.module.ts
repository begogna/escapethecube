import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HttpClient } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OverlayContainer } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EscapeTheCubeAppRoutingModule } from './app-routing.module';
import { CreatorComponent } from './features/creator/creator.component';
import { ConceptComponent } from './features/concept/concept.component';
import { HomeComponent } from './features/home/home.component';
import { BookingComponent } from './features/booking/booking.component';
import { EscapeComponent } from './features/escape/escape.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent, HomeComponent, CreatorComponent, ConceptComponent, BookingComponent, EscapeComponent],
  imports: [
    EscapeTheCubeAppRoutingModule,
    BrowserModule,
    CoreModule,
    SharedModule,
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class EscapeTheCubeAppModule {
  constructor(overlayContainer: OverlayContainer) {
    // To force apply the theme to overlay elements
    overlayContainer.getContainerElement().classList.add('etc-theme');
  }
}
