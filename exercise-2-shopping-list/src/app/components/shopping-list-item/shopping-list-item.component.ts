import { Component, Input, OnInit } from '@angular/core';
import { Item } from '..';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.scss'],
})
export class ShoppingListItemComponent implements OnInit {
  @Input() item!: Item;

  constructor() {}

  ngOnInit(): void {}
}
