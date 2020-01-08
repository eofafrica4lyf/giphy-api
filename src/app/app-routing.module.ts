import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DetailspageComponent } from './detailspage/detailspage.component';

const routes: Routes = [
	{path: "", pathMatch: 'full',component: HomepageComponent},
	{path: "gif/:id", component: DetailspageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
