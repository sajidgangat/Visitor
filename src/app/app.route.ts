import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HeaderComponent } from './user/header/header.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { LeadsComponent } from './user/leads/leads.component';
import { TodaysleadsComponent } from './user/todaysleads/todaysleads.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent ,children:[

        {
            path:'leads', component:LeadsComponent
        },
        {
            path:'todaysleads', component:TodaysleadsComponent
        },

        { 
            path: 'dashboard', component: DashboardComponent 
        }
    ]



},


    { path: 'forget', component: ForgetpasswordComponent },
    { path: 'header', component: HeaderComponent },
    { path: '', redirectTo: "/home", pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})

export class AppRouting { }