import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialAwesomeComponentModule } from '../material.module';
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
  declarations: [CommentsComponent],
  imports: [CommonModule, MaterialAwesomeComponentModule],
  exports: [MaterialAwesomeComponentModule, CommentsComponent],
})
export class SharedModule {}
