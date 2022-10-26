import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepetitionComponent } from './components/repetition/repetition.component';

const routes: Routes = [{ component: RepetitionComponent, path: 'repetition' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
