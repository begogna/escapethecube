import { NgModule } from '@angular/core';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

const components = [HeaderBarComponent];

@NgModule({
  imports: [CommonModule, SharedModule],
  exports: [components],
  declarations: [components],
  providers: [],
})
export class CoreModule {}
