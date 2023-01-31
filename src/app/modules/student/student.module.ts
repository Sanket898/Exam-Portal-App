import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { HomeComponent } from './home/home.component';
import { TestPageComponent } from './test-page/test-page.component';
import { TestResultComponent } from './test-result/test-result.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent, TestPageComponent, TestResultComponent],
  imports: [CommonModule, StudentRoutingModule, HttpClientModule],
})
export class StudentModule {}
