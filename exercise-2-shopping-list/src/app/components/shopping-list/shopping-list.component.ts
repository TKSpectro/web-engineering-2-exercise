import { Component } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Item } from '..';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent {
  public items: Item[] = [
    { id: uuid(), description: 'string1', done: false },
    { id: uuid(), description: 'string2', done: true },
    { id: uuid(), description: 'string3', done: false },
  ];

  constructor() {}

  addItem(description: string) {
    if (!description) {
      return;
    }

    this.items.push({
      id: uuid(),
      description,
      done: false,
    });
  }
}
