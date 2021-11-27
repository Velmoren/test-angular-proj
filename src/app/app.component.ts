import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

export interface Post {
  title: string,
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  search: string = ''
  searchField: string = 'title'

  posts: Post[] = [
    {title: 'Beer', text: 'The best beer in the world!'},
    {title: 'Bread', text: 'The best bread in the world!'},
    {title: 'JavaScript', text: 'The best language in the world!'},
  ]

  addPost() {
    this.posts.unshift({
      title: 'Angular 8',
      text: 'Velmoren'
    })
  }

  e: number = Math.E

  str: string = 'hello world'

  today: Date =  new Date()

  float: number = 0.42

  obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4
      }
    }
  }

  promise: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise Resolved')
    }, 4000)
  })

  date$: Observable<Date> = new Observable(obs => {
    setInterval(() => {
      obs.next(new Date())
    }, 500)
  })

  ngOnInit() {

  }

  // date: Date = new Date

  // ngOnInit(): void {
  //   this.date$.subscribe(date => {
  //     this.date = date
  //   })
  // }

}
