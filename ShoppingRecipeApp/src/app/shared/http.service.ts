import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService) { }

    storeRecipes() {

        return this.http.put('https://shopping-recipe-app.firebaseio.com/recipes.json',
            this.recipeService.getRecipes(), {
                reportProgress: true
            });
        // const req = new HttpRequest('PUT', 'https://shopping-recipe-app.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
        //     reportProgress: true,
        //     params: params
        // });
    }

    fetchRecipes() {

        this.http.get<Recipe[]>('https://shopping-recipe-app.firebaseio.com/recipes.json')
            .pipe(map(
                (recipes) => {
                    console.log(recipes)
                    for (let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            console.log(recipe);
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }
            ))
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipe(recipes);
                }
            );
    }

}