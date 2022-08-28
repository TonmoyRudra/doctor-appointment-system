import { NotFoundComponent } from './Components/not-found/not-found.component';
import { CalenderViewComponent } from './Components/calender-view/calender-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: CalenderViewComponent
},
{
  path: 'month/:id',
  component: CalenderViewComponent
},
{
  path: '404',
  component: NotFoundComponent
},
{
  path: '**',
  redirectTo: '/404',
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
