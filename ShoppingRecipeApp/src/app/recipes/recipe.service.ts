import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel', 'A tasty schnitzel', 'https://upload.wikimedia.org/wikipedia/commons/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG', 
        [
            new Ingredient('Meat', 1), new Ingredient('French Fries', 20)
        ]),
        new Recipe('A big fat burger', 'Dammnn', 'https://sifu.unileversolutions.com/image/en-AU/recipe-topvisual/2/1260-709/beef-burger-with-deep-fried-bacon-and-thousand-island-dressing-50247463.jpg', 
        [
            new Ingredient('Buns', 1), new Ingredient('Beef patty', 1), new Ingredient('Tomato', 3)
        ])
      ];

    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppinglist(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}