import { Component, Inject, ElementRef } from 'angular2/core';
import { RouterLink } from 'angular2/router';

import { AnimatesDirective } from '../../../directives/animates.directive';
import { CardComponent } from '../../card/card.component';
import { QuestionsComponent } from '../questions.component';

@Component({
  selector: 'question',
  templateUrl: './question.html',
  styleUrls: ['./question.less'],
  host: {
    '[hidden]': '!active'
  },
  directives: [
    RouterLink,
    AnimatesDirective,
    CardComponent
  ]
})
export class QuestionComponent {

  private _active: boolean = false;
  private _number: number = 0;

  constructor(
    @Inject(ElementRef) private _elementRef: ElementRef,
    @Inject(QuestionsComponent) private _questionsComponent: QuestionsComponent
    ) {
    this.questionsComponent.addQuestion(this);
  }

  get questionsComponent(): QuestionsComponent {
    return this._questionsComponent;
  }

  get active(): boolean {
    return this._active;
  }

  set active(active: boolean) {
    this._active = active;
  }

  get number(): number {
    return this._number;
  }

  set number(number: number) {
    this._number = number;
  }

  get elementRef() {
    return this._elementRef;
  }

}