export interface IShoppingItem {
  id: string;
  name: string;
  amount: number;
}

export class ShoppingItem implements IShoppingItem {
  id: string;
  name: string = '';
  amount: number = 1;

  public constructor(model?: Partial<ShoppingItem>) {
    if (model !== undefined) {
      Object.assign(this, model);
    }

    this.id = new Date().getTime().toString();
  }
}
