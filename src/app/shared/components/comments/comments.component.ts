import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Comment } from '../../../core/models/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  // création d'attributs personnalisés avec les inputs
  // ie des attributs html auxquels on vient lier les éléments grâce au input
  // <app-comments [comments]="post.comments"></app-comments>
  @Input() comments!: Comment[];
  // On a un output sur lequel on peut venir brancher du comportement
  @Output() newComment = new EventEmitter<string>();

  commentCtrl!: FormControl;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.commentCtrl = this.fb.control('', [
      Validators.required,
      Validators.minLength(10)
    ]);
  }

  // Pour le sens inverse pour lier un comportement à un évènement à l'intérieur du component
  onLeaveComment() {
    if (this.commentCtrl.invalid) {
      return;
    }
    this.newComment.emit(this.commentCtrl.value);
    this.commentCtrl.reset();
  }
}
