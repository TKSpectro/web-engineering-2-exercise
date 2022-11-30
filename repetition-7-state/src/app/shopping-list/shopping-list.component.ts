import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddItem, RemoveItem } from './shopping-list.action';
import { IShoppingItem } from './shopping-list.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  public name: string = '';
  public amount: number = 0;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  @Select((state: { shoppingList: IShoppingItem[] }) =>
    state.shoppingList.map((it) => ({
      ...it,
    }))
  )
  public shoppingList$!: Observable<IShoppingItem[]>;

  public add() {
    this.store.dispatch(
      new AddItem({
        name: this.name,
        amount: this.amount,
      })
    );
    this.name = '';
    this.amount = 0;
  }

  public remove(shoppingItem: IShoppingItem) {
    this.store.dispatch(new RemoveItem(shoppingItem.id));
  }
}
