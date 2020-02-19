// Angular Material Components
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [MatToolbarModule, MatButtonModule, MatCardModule],
  exports: [MatToolbarModule, MatButtonModule, MatCardModule],
})
export class MaterialModule {}
