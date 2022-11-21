import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SomeFormComponent } from './some-form.component';

const routes: Routes = [
  {
    path: '',
    component: SomeFormComponent,
  },
];

@NgModule({
  declarations: [SomeFormComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SomeFormModule {}
