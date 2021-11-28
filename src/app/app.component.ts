import {Component, OnInit} from '@angular/core'
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs";

export interface Todo {
  completed: boolean
  title: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos: Todo[] = []
  todoTitle: string = ''
  loading: boolean = false

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    // this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2').subscribe(todos => {this.todos = todos})

    this.getTodos()
  }

  getTodos() {
    this.loading = true
    this.http.get<Todo[]>('http://localhost:3000/todos')
      .pipe(delay(500))
      .subscribe(todos => {
        this.todos = todos
        this.loading = false
      })
  }

  addTodos() {
    if (!this.todoTitle.trim()) return

    const newTodo: Todo = {title: this.todoTitle, completed: false}

    // this.http.post('https://jsonplaceholder.typicode.com/todos', newTodo).subscribe(todo => {console.log(todo)})
    this.http.post<Todo[]>('http://localhost:3000/todos', newTodo)
      .subscribe(todo => {
        this.getTodos()
        this.todoTitle = ''
      })
  }

  deleteTodo(id?: number) {
    this.http.delete(`http://localhost:3000/todos/${id}`)
      .subscribe(() => {
        // this.todos = this.todos.filter(todo => todo.id !== id)
        this.getTodos()
      })
  }
}

