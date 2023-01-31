import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentAppComponent } from './student-app/student-app.component';
import { ComponentsModule } from '../../components/components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StudentAppComponent],
  imports: [CommonModule, ComponentsModule, RouterModule],
})
export class StudentLayoutModule {}
