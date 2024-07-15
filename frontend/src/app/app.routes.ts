import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { NgModule } from '@angular/core';

const route:Routes = [
  {path: '', component:HomeComponent},
  {path: 'search/:searchTerm', component:HomeComponent}
];

NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})

export const routes: Routes = [];
