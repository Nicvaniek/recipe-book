import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Salmon', 5),
    new Ingredient('Apples', 10)
  ];
  constructor() { }

  ngOnInit() {
  }

}
