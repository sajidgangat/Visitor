import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HeaderComponent } from './user/header/header.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'forget', component: ForgetpasswordComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo: "/home", pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})

export class AppRouting { }