import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, delay, Observable, throwError} from "rxjs";

export interface Todo {
  completed: boolean
  title: string
  id?: number
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) {
  }

  getTodos(): Observable<Todo[]> {
    let params = new HttpParams()

    // params = params.append('_limit', '3')
    // params = params.append('custom', 'anything')

    return this.http.get<Todo[]>(`http://localhost:3000/todos`, {
      // params: new HttpParams().set('_limit', '3')
      params,
      observe: "body"
    })
      .pipe(
        delay(500),
        catchError(error => {
          console.log('Error', error.message)
          return throwError(error)
        })
      )
  }

  addTodos(todo: Todo): Observable<Todo> {
    const headers = new HttpHeaders({
      'MyCustomHeader': Math.random().toString()
    })
    return this.http.post<Todo>(`http://localhost:3000/todos`, todo, {headers}
    )
  }

  deleteTodo(id?: number): Observable<Todo> {
    return this.http.delete<Todo>(`http://localhost:3000/todos/${id}`)
  }

  completeTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`http://localhost:3000/todos/${todo.id}`, {
      ...todo,
      completed: true
    })
  }
}
