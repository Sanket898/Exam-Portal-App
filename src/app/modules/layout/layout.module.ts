import { ComponentsModule } from './../components/components.module';
import { StudentLayoutModule } from './student-layout/student-layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, ComponentsModule, RouterModule],
  exports: [StudentLayoutModule],
})
export class LayoutModule {}
