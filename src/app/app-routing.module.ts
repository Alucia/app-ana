import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'create-user',
    loadChildren: () => import('./user/create-user/create-user.module').then(mod => mod.CreateUserModule)
  },
  {
    path: 'list-user',
    loadChildren: () => import('./user/list-user/list-user.module').then(mod => mod.ListUserModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
