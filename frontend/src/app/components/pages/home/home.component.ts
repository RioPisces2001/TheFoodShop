import { FoodService } from './../../../services/food.service';
import { Component } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import {
  StarRatingConfigService,
  StarRatingModule
} from 'angular-star-rating';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,NgFor,StarRatingModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  foods: Food[] = [];
  constructor(private foodService:FoodService){
    this.foods = foodService.getAll();
  }
}
