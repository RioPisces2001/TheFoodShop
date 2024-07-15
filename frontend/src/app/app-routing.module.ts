import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from "./components/pages/home/home.component";

const routes:Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'search/:searchTerm', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
