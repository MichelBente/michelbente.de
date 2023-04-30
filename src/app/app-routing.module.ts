import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImprintComponent } from './imprint/imprint.component';
import { HomescreenComponent } from './homescreen/homescreen.component';

const routes: Routes = [
  { path: '', component: HomescreenComponent},
  { path: 'imprint', component: ImprintComponent },
  { path: '**', component: HomescreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ReactiveFormsModule],
  exports: [RouterModule, FormsModule, ReactiveFormsModule]
})
export class AppRoutingModule { 
}