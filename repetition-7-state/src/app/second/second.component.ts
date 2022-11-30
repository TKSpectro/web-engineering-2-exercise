import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IShoppingItem } from '../shopping-list/shopping-list.model';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
})
export class SecondComponent implements OnInit {
  public shoppingList$!: Observable<IShoppingItem[]>;

  constructor(private store: Store) {
    this.shoppingList$ = this.store.select((state) => state.shoppingList);
  }

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.shoppingList$ = this.store.select((state) => state.shoppingList);
    });
  }
}
