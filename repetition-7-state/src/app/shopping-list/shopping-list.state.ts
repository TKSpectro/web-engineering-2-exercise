import { Action, State, StateContext } from '@ngxs/store';
import { AddItem, RemoveItem } from './shopping-list.action';
import { IShoppingItem } from './shopping-list.model';
@State<IShoppingItem[]>({
  name: 'shoppingList',
  defaults: [],
})
export class ShoppingListState {
  @Action(AddItem)
  public addItem(
    stateContext: StateContext<IShoppingItem[]>,
    { shoppingItem }: AddItem
  ) {
    stateContext.setState([
      ...stateContext.getState(),
      { id: new Date().getTime().toString(), ...shoppingItem },
    ]);
  }

  @Action(RemoveItem)
  public removeItem(
    stateContext: StateContext<IShoppingItem[]>,
    { id }: { id: string }
  ) {
    stateContext.setState(stateContext.getState().filter((it) => it.id !== id));
  }

  //   @Selector()
  //   public static killsPerYear(state: IShoppingItem[]) {
  //     return (name: string) => {
  //       const hero = state.find((it) => it.name === name);
  //       if (hero && hero.kills !== undefined && hero.age !== undefined) {
  //         return hero.kills / hero.age;
  //       }
  //       return 0;
  //     };
  //   }
  //   @Selector()
  //   public static killsPerYearFirst(state: IHero[]) {
  //     const hero = state[0];
  //     if (hero?.kills !== undefined && hero?.age !== undefined) {
  //       return hero.kills / hero.age;
  //     }
  //     return 0;
  //   }
  //   @Selector()
  //   public static killsPerYearLast(state: IHero[]) {
  //     const hero = state[state.length - 1];
  //     if (hero?.kills !== undefined && hero?.age !== undefined) {
  //       return hero.kills / hero.age;
  //     }
  //     return 0;
  //   }
}
