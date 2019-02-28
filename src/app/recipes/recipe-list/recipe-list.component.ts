import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Crock Pot Chilli', 'Very hot dish', 'https://search.chow.com/thumbnail/1280/800/www.chowstatic.com/assets/2014/09/30669_spicy_slow_cooker_beef_chili_3000x2000.jpg'),
    new Recipe('Maki Rolls', 'Asian classic', 'https://img.taste.com.au/3mYHXsD_/taste/2016/11/sushi-for-kids-81300-1.jpeg')
  ];

  @Output()
  recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  selectRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
