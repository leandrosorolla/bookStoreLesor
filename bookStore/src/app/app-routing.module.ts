import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { OffersComponent } from './componentes/offers/offers.component';
import { DetailsBookComponent } from './componentes/details-book/details-book.component';
import { ListBooksComponent } from './componentes/admin/list-books/list-books.component';
import { RegisterComponent } from './componentes/users/register/register.component';
import { LoginComponent } from './componentes/users/login/login.component';
import { ProfileComponent } from './componentes/users/profile/profile.component';
import { Page404Component } from './componentes/page404/page404.component';


const routes: Routes = [{path: '', component: HomeComponent},
{path: 'offers', component: OffersComponent, canActivate: [AuthGuard]}, // solo usuarios auth
{path: 'book/:id', component: DetailsBookComponent},
{path: 'admin/list-books', component: ListBooksComponent, canActivate: [AuthGuard]}, // solo usuarios auth
{path: 'user/login', component: LoginComponent},
{path: 'user/register', component: RegisterComponent},
{path: 'user/profile', component: ProfileComponent, canActivate: [AuthGuard]}, // solo usuarios auth
{path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
