import {Component, AfterContentInit, ElementRef, Renderer, Self} from '@angular/core';
import {NgModel, NgClass} from '@angular/common';
import {PAGINATION_VALUE_ACCESSOR, PaginationComponent} from './pagination.component';

const pagerConfig = {
  itemsPerPage: 10,
  previousText: '« Previous',
  nextText: 'Next »',
  align: true
};

const PAGER_TEMPLATE = `
    <ul class="pager">
      <li [class.disabled]="noPrevious()" [class.previous]="align" [ngClass]="{'pull-right': align}">
        <a href (click)="selectPage(page - 1, $event)">{{getText('previous')}}</a>
      </li>
      <li [class.disabled]="noNext()" [class.next]="align" [ngClass]="{'pull-right': align}">
        <a href (click)="selectPage(page + 1, $event)">{{getText('next')}}</a>
      </li>
  </ul>
`;

/* tslint:disable */
@Component({
  selector: 'pager, pager[ngModel]',
  template: PAGER_TEMPLATE,
  directives: [NgClass],
  providers: [PAGINATION_VALUE_ACCESSOR],
  inputs: [
    'align',
    'totalItems', 'itemsPerPage',
    'previousText', 'nextText',
  ]
})
/* tslint:enable */
export class PagerComponent extends PaginationComponent implements AfterContentInit {
  public config:any = pagerConfig;

  public constructor(renderer:Renderer, elementRef:ElementRef) {
    super(renderer, elementRef);
  }
}
