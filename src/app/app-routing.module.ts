import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/common/nav/nav.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'nav' },
  { path: 'home', component: HomeComponent },
  { path: 'nav', component: NavComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
