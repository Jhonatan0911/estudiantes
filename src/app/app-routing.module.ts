import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

//Guards
import { LogueadoGuard } from './guards/logueado.guard';
import { NoLogueadoGuard } from './guards/no-logueado.guard';

//Layouts
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

//Paginas
import { ApprenticesPage } from './pages/apprentices/apprentices.page';
import { ClassPage } from './pages/class/class.page';
import { HomePage } from './pages/home/home.page';
import { InstructorsPage } from './pages/instructors/instructors.page';
import { IndexPage } from './pages/index/index.page';
import { LoginPage } from './pages/login/login.page';

const routes: Routes = [
  {
    path: '', component: LoginLayoutComponent, children: [
      { path: '', component: LoginPage },
      { path: 'index', component: IndexPage }
    ]
  },
  {
    path: '', component: MainLayoutComponent, children: [
      { path: 'home', component: HomePage },
      { path: 'fichas', component: ClassPage },
      { path: 'aprendices', component: ApprenticesPage },
      { path: 'instructores', component: InstructorsPage },
      { path: 'horario', component: HomePage },
    ]
  },
  {
    path: 'index',
    loadChildren: () => import('./pages/index/index.module').then( m => m.IndexPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
