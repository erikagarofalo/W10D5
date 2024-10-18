import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DoneComponent } from './components/done/done.component';
import { UndoneComponent } from './components/undone/undone.component';
import { UsersComponent } from './components/users/users.component';
import { Error404Component } from './components/error404/error404.component';

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'done',
        component: DoneComponent,
    },
    {
        path: 'undone',
        component: UndoneComponent,
    },
    {
        path: 'users',
        component: UsersComponent,
    },
    {
        path: '**',
        component: Error404Component,
    },
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        DoneComponent,
        UndoneComponent,
        UsersComponent,
    ],
    imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
