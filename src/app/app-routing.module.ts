import { StudentAppComponent } from './modules/layout/student-layout/student-app/student-app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: StudentAppComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/student/student.module').then(
            (m) => m.StudentModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
