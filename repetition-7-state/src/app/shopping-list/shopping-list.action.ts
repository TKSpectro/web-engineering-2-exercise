import { IShoppingItem } from './shopping-list.model';
type IShoppingItemWithoutId = Omit<IShoppingItem, 'id'>;

export class AddItem {
  public static readonly type = 'AddItem';
  public constructor(public shoppingItem: IShoppingItemWithoutId) {}
}

export class RemoveItem {
  public static readonly type = 'RemoveItem';
  public constructor(public id: string) {}
}
