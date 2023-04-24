import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImprintComponent } from './imprint/imprint.component';
import { MainComponent } from './main/main.component';
import { PrivacyComponent } from './privacy/privacy.component';
const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy', component: PrivacyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ReactiveFormsModule],
  exports: [RouterModule, FormsModule, ReactiveFormsModule]
})
export class AppRoutingModule { 
}