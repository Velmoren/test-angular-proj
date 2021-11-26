import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements AfterContentInit, OnChanges, DoCheck {

  @Input() post: Post = {
    title: '',
    text: ''
  }
  @Output() onRemove = new EventEmitter<number>()

  @ContentChild('info') infoRef!: ElementRef

  removePost() {
    this.onRemove.emit(this.post.id)
  }

  constructor() {
    console.log('constructor')
  }

  ngAfterContentInit() {
    console.log(this.infoRef?.nativeElement)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  ngDoCheck() {
    console.log('ngDoCheck')
  }

}
