import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadComponent: () => import('./features/home/home').then(m => m.Home)
    },
    {
        path: 'qualificacoes',
        loadComponent: () => import('./features/qualificacao/qualificacao').then(m => m.Qualificacao)
    },
    {
        path: 'projetos',
        loadComponent: () => import('./features/projetos/projetos').then(m => m.Projetos)
    }
];
