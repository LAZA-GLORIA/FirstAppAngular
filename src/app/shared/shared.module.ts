import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialAwesomeComponentModule } from '../material.module';
import { CommentsComponent } from './components/comments/comments.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CommentsComponent],
  imports: [CommonModule, MaterialAwesomeComponentModule, ReactiveFormsModule],
  exports: [MaterialAwesomeComponentModule, CommentsComponent, ReactiveFormsModule],
})
export class SharedModule {}
