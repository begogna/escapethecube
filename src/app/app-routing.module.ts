import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatorComponent } from './features/creator/creator.component';
import { ConceptComponent } from './features/concept/concept.component';
import { HomeComponent } from './features/home/home.component';
import { BookingComponent } from './features/booking/booking.component';

const etcRoutes: Routes = [
  // { path: '**', redirectTo: '/creator', pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'creator', component: CreatorComponent },
  { path: 'concept', component: ConceptComponent },
  { path: 'booking', component: BookingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(etcRoutes)],
  exports: [RouterModule],
})
export class EscapeTheCubeAppRoutingModule {}
