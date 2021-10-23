import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./auth/helpers/auth.guard";

const authModule = () => import('./auth/auth.module').then(x => x.AuthModule)

const routes: Routes = [

  { path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  { path: 'auth',
    loadChildren: authModule
  },
  { path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
