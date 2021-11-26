import {Component, OnInit} from '@angular/core';

export interface Post {
  title: string,
  text: string,
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  posts: Post[] = [
    {title: 'Хочу выучить Angular коспоненты', text: 'Я все еще учу компоненты', id: 1},
    {title: 'Следующий блок', text: 'Будет про директивы и еще про пайпы', id: 2},
  ]

  updatePosts(post: Post) {
    this.posts.unshift(post)
  }

  removePost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id)
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log('timeout')
      this.posts[0] = {
        title: 'Changed',
        text: 'Changed text',
        id: 5
      }
    }, 5000)
  }
}
