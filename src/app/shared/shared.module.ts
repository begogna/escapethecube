import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [],
  exports: [
    CommonModule,
    HttpClientModule,
    TranslateModule,
    MaterialModule,
    FontAwesomeModule,
  ],
  declarations: [],
  providers: [],
})
export class SharedModule {}
