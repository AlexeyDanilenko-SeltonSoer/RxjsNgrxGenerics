import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainRxjsComponent } from './main-rxjs.component';

const routes: Routes = [
  {
    path: '',
    component: MainRxjsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class MainRxjsRoutingModule {}
