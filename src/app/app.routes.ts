import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChildCompComponent } from './child-comp/child-comp.component';

export const routes: Routes = [
   { path: "", component: ChildCompComponent},
   { path: "**", component:PageNotFoundComponent}
];
