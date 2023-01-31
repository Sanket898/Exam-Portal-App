import { TestResultComponent } from './test-result/test-result.component';
import { TestPageComponent } from './test-page/test-page.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test/:testId', component: TestPageComponent },
  { path: 'result', component: TestResultComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
