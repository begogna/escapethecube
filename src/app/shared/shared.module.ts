import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [],
  exports: [CommonModule, HttpClientModule, TranslateModule, MaterialModule],
  declarations: [],
  providers: [],
})
export class SharedModule {}
