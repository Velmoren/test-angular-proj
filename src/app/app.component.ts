import {Component, OnInit} from '@angular/core'
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs";
import {Todo, TodosService} from "./todos.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos: Todo[] = []
  todoTitle: string = ''
  loading: boolean = false
  error: string = ''

  constructor(private todosService: TodosService) {
  }

  ngOnInit() {
    this.getTodos()
  }

  getTodos() {
    this.loading = true
    this.todosService.getTodos()
      .subscribe(todos => {
        this.todos = todos
        this.loading = false
      }, error => {
        this.error = error.message
      })
  }

  addTodos() {
    if (!this.todoTitle.trim()) return

    const newTodo: Todo = {title: this.todoTitle, completed: false}

    this.todosService.addTodos(newTodo)
      .subscribe(todo => {
        this.getTodos()
        this.todoTitle = ''
      }, error => {
        this.error = error.message
      })
  }

  deleteTodo(id?: number) {
    this.todosService.deleteTodo(id)
      .subscribe(() => {
        this.getTodos()
      }, error => {
        this.error = error.message
      })
  }

  completeTodo(todo: Todo) {
    this.todosService.completeTodo(todo).subscribe((res) => {
      this.getTodos()
    }, error => {
      this.error = error.message
    })
  }
}

