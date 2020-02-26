import { NgModule } from '@angular/core';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { EscapeTheCubeAppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { FeedbacksComponent } from '../features/feedbacks/feedbacks.component';

const components = [HeaderBarComponent, FooterComponent, SidenavListComponent, FeedbacksComponent];

@NgModule({
  imports: [CommonModule, SharedModule, EscapeTheCubeAppRoutingModule],
  exports: [components],
  declarations: [components],
  providers: [],
})
export class CoreModule {}
