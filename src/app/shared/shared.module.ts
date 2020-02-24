import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [],
  exports: [CommonModule, HttpClientModule, TranslateModule, MaterialModule, FontAwesomeModule, FlexLayoutModule],
  declarations: [],
  providers: [],
})
export class SharedModule {}
