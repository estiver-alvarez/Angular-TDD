import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RomanComponent } from './roman/roman.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: RomanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
