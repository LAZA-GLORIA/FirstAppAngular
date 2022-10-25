import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { R3TargetBinder } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Comment } from '../../../core/models/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  animations: [
    // on va animer les listItem
    // quand on anime des éléments dans un composant angular cela veut dire qu'on anime entre plusieurs états
    // On passe d'un état à un autre état via des transitions pour gérer l'animation, la transition entre les différents states
    trigger('listItem', [
      state(
        'default',
        style({
          transform: 'scale(1)',
          'background-color': 'white',
          'z-index': 1,
        })
      ),
      state(
        'active',
        style({
          transform: 'scale(1.05)',
          'background-color': 'rgb(201, 157, 242)',
          'z-index': 2,
        })
      ),
      transition('default => active', [animate('100ms ease-in-out')]),
      transition('active => default', [animate('500ms ease-in-out')]),
    ]),
  ],
})
export class CommentsComponent implements OnInit {
  // création d'attributs personnalisés avec les inputs
  // ie des attributs html auxquels on vient lier les éléments grâce au input
  // <app-comments [comments]="post.comments"></app-comments>
  @Input() comments!: Comment[];
  // On a un output sur lequel on peut venir brancher du comportement
  @Output() newComment = new EventEmitter<string>();

  commentCtrl!: FormControl;
  // On a besoin d'un objet qui va contenir tous els animationState pour tous les listItem
  // Les clés de l'objet seront l'index du comment dans le tableau et l'associe default ou active

  // On appelle souvent ce type d'objet un dictionnary car il associe
  // un élément à une valeur qui y correspond
  // ici on associe l'index dans le tableau à la valeur d'un state qui y correspond
  animationStates: { [key: number]: 'default' | 'active' } = {};
  // listItemAnimationState: 'default' | 'active' = 'default';
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.commentCtrl = this.fb.control('', [
      Validators.required,
      Validators.minLength(10),
    ]);
    // for in me permet d'accéder aux index
    // différent de for of qui me permettrait d'accéder aux comments
    for (let index in this.comments) {
      this.animationStates[index] = "default";
    }
  }

  // Pour le sens inverse pour lier un comportement à un évènement à l'intérieur du component
  onLeaveComment() {
    if (this.commentCtrl.invalid) {
      return;
    }
    this.newComment.emit(this.commentCtrl.value);
    this.commentCtrl.reset();
  }

  onListItemMouseEnter(index: number) {
    this.animationStates[index] = 'active';
  }

  onListItemMouseLeave(index: number) {
    this.animationStates[index] = 'default';
  }
}
