import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialAwesomeComponentModule } from '../material.module';
import { CommentsComponent } from './components/comments/comments.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShortenPipe } from './pipes/shorten.pipe';
import { UsernamePipe } from './pipes/username.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';

@NgModule({
  declarations: [CommentsComponent, ShortenPipe, UsernamePipe, TimeAgoPipe],
  imports: [CommonModule, MaterialAwesomeComponentModule, ReactiveFormsModule],
  exports: [
    MaterialAwesomeComponentModule,
    CommentsComponent,
    ReactiveFormsModule,
    ShortenPipe,
    UsernamePipe,
    TimeAgoPipe,
  ],
})
export class SharedModule {}
