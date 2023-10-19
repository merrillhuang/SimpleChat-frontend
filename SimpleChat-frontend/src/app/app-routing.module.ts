import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RoomPageComponent } from './room-page/room-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'rooms',
    component: MainPageComponent
  },
  {
    path: 'rooms/:id',
    component: RoomPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
