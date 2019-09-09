import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'dummy-recipe-1',
      'desc-1',
      'https://images-gmi-pmc.edge-generalmills.com/23bcd559-1e27-4c54-90a7-812690764c7f.jpg'
    ),
    new Recipe(
      'dummy-recipe-2',
      'desc-2',
      'https://images-gmi-pmc.edge-generalmills.com/23bcd559-1e27-4c54-90a7-812690764c7f.jpg'
    ),
  ];
  constructor() {}

  ngOnInit() {}
}
