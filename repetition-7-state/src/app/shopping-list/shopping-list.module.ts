import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
  declarations: [ShoppingListComponent],
  imports: [CommonModule, FormsModule],
  exports: [ShoppingListComponent],
})
export class ShoppingListModule {}
